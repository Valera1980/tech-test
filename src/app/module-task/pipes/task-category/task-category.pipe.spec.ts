import { ENUM_TASK_CATEGORY } from "@module-task/enums/task-category.enum";
import { TaskCategoryPipe } from "./task-category.pipe";

describe("TaskCategoryPipe", () => {
  it("create an instance", () => {
    const pipe = new TaskCategoryPipe();
    expect(pipe).toBeTruthy();
  });
  it("should return HOUSE", () => {
    const pipe = new TaskCategoryPipe();
    expect(pipe.transform(ENUM_TASK_CATEGORY.HOUSE)).toBeTruthy("House");
  });
});
