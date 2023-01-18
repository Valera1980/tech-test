import { TaskDonePipe } from "./task-done.pipe";

describe("TaskDonePipe", () => {
  it("create an instance", () => {
    const pipe = new TaskDonePipe();
    expect(pipe).toBeTruthy();
  });
  it("should return FALSE", () => {
    const pipe = new TaskDonePipe();
    const val = pipe.transform(false);
    expect(val).toEqual("false");
  });
  it("should return STRING", () => {
    const pipe = new TaskDonePipe();
    const val = pipe.transform(new Date(2022, 3, 12));
    expect(val).toEqual("12/04/2022");
  });
});
