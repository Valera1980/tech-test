import { takeUntil } from "rxjs/operators";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { ARRAY_TASK_CATEGORY_FILTER } from "@module-task/enums/task-category.enum";
import { FilterTask } from "@module-task/models/task-filter.model";

@Component({
  selector: "app-task-filters",
  templateUrl: "./task-filters.component.html",
  styleUrls: ["./task-filters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFiltersComponent implements OnInit, OnDestroy {
  categories = ARRAY_TASK_CATEGORY_FILTER;
  destroy$ = new Subject();
  form: FormGroup;
  default: FilterTask = {
    description: "",
    label: "",
    category: "all",
    start: null,
    end: null,
  };

  @Output() eventChange = new EventEmitter<FilterTask>();
  @Output() eventClear = new EventEmitter<void>();

  constructor(private _fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.form = this._fb.group(this.default);
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => this.eventChange.emit(data));
  }
  clear(): void {
    this.form.patchValue(this.default, { emitEvent: false });
    this.eventClear.emit();
  }
}
