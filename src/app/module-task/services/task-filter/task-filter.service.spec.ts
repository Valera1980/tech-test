import { TestBed } from "@angular/core/testing";

import { TaskFilterService } from "./task-filter.service";
import { FilterTask } from "@module-task/models/task-filter.model";
import { ModelTask } from "@module-task/models/task.model";

describe("TaskFilterService", () => {
  let service: TaskFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TaskFilterService] });
    service = TestBed.inject(TaskFilterService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("check filter match", () => {
    const data = [new ModelTask({ id: 1, label: "OneLabel" })];
    const filter: FilterTask = {
      category: "all",
      description: "",
      end: null,
      label: "One",
      start: null,
    };
    expect(service.filter(data, filter)?.length).toEqual(1);
  });
  it("check filter not match", () => {
    const data = [new ModelTask({ id: 1, label: "OneLabel" })];
    const filter: FilterTask = {
      category: "all",
      description: "",
      end: null,
      label: "Two",
      start: null,
    };
    expect(service.filter(data, filter)?.length).toEqual(0);
  });
});
