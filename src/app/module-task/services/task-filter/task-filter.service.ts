import { Injectable } from "@angular/core";
import { FilterTask } from "@module-task/models/task-filter.model";
import { ModelTask } from "@module-task/models/task.model";

@Injectable()
export class TaskFilterService {
  constructor() {}
  // usually tasks like this implement on backend side
  // so there is so many "ifs"
  filter(source: ModelTask[], filter: FilterTask): ModelTask[] {
    if (filter.category === "all") {
      const filtered = source
        .filter((t) => t.label.includes(filter.label))
        .filter((t) => t.description.includes(filter.description))
        .filter((t) => {
          if (filter.end && filter.start) {
            return t.done >= filter.start && t.done <= filter.end;
          }
          return t;
        });

      return filtered;
    } else {
      const filtered = source
        .filter((t) => t.label.includes(filter.label))
        .filter((t) => t.description.includes(filter.description))
        .filter((t) => t.category === filter.category)
        .filter((t) => {
          if (filter.end && filter.start) {
            return t.done >= filter.start && t.done <= filter.end;
          }
          return t;
        });
      return filtered;
    }
  }
}
