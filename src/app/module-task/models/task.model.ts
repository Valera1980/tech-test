import { Values } from "@global-models/values";
import { ENUM_TASK_CATEGORY } from "../enums/task-category.enum";
import { transformDoneValue } from "../utils/task-done.util";

export interface Task {
  readonly id: number;
  readonly label: string;
  readonly description: string;
  readonly category: Values<typeof ENUM_TASK_CATEGORY>;
  readonly done: Date | boolean;
}

export class ModelTask implements Task {
  readonly id: number;
  readonly label: string;
  readonly description: string;
  readonly category: Values<typeof ENUM_TASK_CATEGORY>;
  readonly done: boolean | Date;
  constructor(data: Partial<Task>) {
    this.id = data.id ? data.id : null;
    this.label = data.label ?? "";
    this.description = data.description ?? "";
    this.category = data.category ?? ENUM_TASK_CATEGORY.HOUSE;
    this.done = transformDoneValue(data.done);
  }
}
