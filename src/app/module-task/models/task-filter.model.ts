import { Values } from "@global-models/values";
import { ENUM_TASK_CATEGORY } from "../enums/task-category.enum";

export interface FilterTask {
  readonly label: string;
  readonly description: string;
  readonly category: Values<typeof ENUM_TASK_CATEGORY>;
  readonly done: Date | boolean;
}
