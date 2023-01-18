import { Injectable } from "@angular/core";
import { FilterTask } from "@module-task/models/task-filter.model";
import { ModelTask } from "@module-task/models/task.model";

@Injectable()
export class TaskFilterService {
  constructor() {}
  filter(source: ModelTask[], filter: FilterTask): ModelTask[] {
    if (filter.category === "all") {
      const filtered = source
        .filter((t) => t.label.includes(filter.label))
        .filter((t) => t.description.includes(filter.description))

        .filter((t) => t.done >= filter.start && t.done <= filter.end);

      return filtered;
    } else {
      const filtered = source
        .filter((t) => t.label.includes(filter.label))
        .filter((t) => t.description.includes(filter.description))
        .filter((t) => t.category === filter.category)
        .filter((t) => t.done >= filter.start && t.done <= filter.end);
      return filtered;
    }
  }
}
