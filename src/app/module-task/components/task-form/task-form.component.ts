import { takeUntil } from "rxjs/operators";
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ARRAY_TASK_CATEGORY } from "@module-task/enums/task-category.enum";
import { ModelTask } from "@module-task/models/task.model";
import { Subject } from "rxjs";
import { getStringForData } from "@module-task/utils/task-done.util";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit, OnDestroy {
  readonly destroy$ = new Subject();
  @Input() model: ModelTask = new ModelTask();
  form: FormGroup;
  categories = ARRAY_TASK_CATEGORY;
  readonly minLengthLabel = 5;
  readonly minLengthDescription = 6;
  @Output() eventChange = new EventEmitter<ModelTask>();
  @Output() eventFormState = new EventEmitter<boolean>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      id: this.model.id,
      description: [
        this.model.description,
        [Validators.required, Validators.minLength(this.minLengthDescription)],
      ],
      label: [
        this.model.label,
        [Validators.required, Validators.minLength(this.minLengthLabel)],
      ],
      category: this.model.category,
      done: this.model.done === false ? null : this.model.done,
    });
    this.eventFormState.emit(!!this.form.valid);
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      const override = {
        ...data,
        ...{ ...{ done: !!data.done ? getStringForData(data.done) : false } },
      };
      this.eventChange.emit(new ModelTask(override));
      this.eventFormState.emit(!!this.form.valid);
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  get description(): AbstractControl {
    return this.form.get("description");
  }
  get label(): AbstractControl {
    return this.form.get("label");
  }
  getErrorsLabel(): string {
    const keys = Object.keys(this.label?.errors ?? []);
    if (Array.isArray(keys) && keys.length > 0) {
      if (keys[0] === "required") {
        return "Field can't be empty";
      }
      if (keys[0] === "minlength") {
        return `Label needs at least ${this.minLengthLabel} characters`;
      }
    }
    return "";
  }
  getErrorsDescription(): string {
    const keys = Object.keys(this.description?.errors ?? []);
    if (Array.isArray(keys) && keys.length > 0) {
      if (keys[0] === "required") {
        return "Field can't be empty";
      }
      if (keys[0] === "minlength") {
        return `Description needs at least ${this.minLengthDescription} characters`;
      }
    }
    return "";
  }
}
