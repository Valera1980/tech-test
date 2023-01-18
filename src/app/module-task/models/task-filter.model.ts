import { Nullable } from "@global-models/nullable.type";
import { Values } from "@global-models/values";
import { ENUM_TASK_CATEGORY_FILTER } from "@module-task/enums/task-category.enum";

export interface FilterTask {
  readonly label: string;
  readonly description: string;
  readonly category: Values<typeof ENUM_TASK_CATEGORY_FILTER>;
  readonly start: Nullable<Date>;
  readonly end: Nullable<Date>;
}
