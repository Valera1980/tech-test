import {
  ENUM_TASK_CATEGORY,
  ARRAY_TASK_CATEGORY,
} from "./../../enums/task-category.enum";
import { Values } from "@global-models/values";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "taskCategory",
})
export class TaskCategoryPipe implements PipeTransform {
  transform(value: Values<typeof ENUM_TASK_CATEGORY>): unknown {
    return (
      ARRAY_TASK_CATEGORY.find((tc) => tc.value === value)?.viewValue ??
      "unknown"
    );
  }
}
