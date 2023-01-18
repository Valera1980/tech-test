import { ENUM_TASK_CATEGORY } from "./../../enums/task-category.enum";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ARRAY_TASK_CATEGORY } from "@module-task/enums/task-category.enum";

@Component({
  selector: "app-task-filters",
  templateUrl: "./task-filters.component.html",
  styleUrls: ["./task-filters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFiltersComponent implements OnInit {
  categories = ARRAY_TASK_CATEGORY;
  form: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      description: "",
      label: "",
      category: ENUM_TASK_CATEGORY.HOUSE,
      done: false,
      start: null,
      end: null,
    });
  }
}
