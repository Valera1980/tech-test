import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TaskHttpService } from "./task-http.service";
import { ModelTask } from "@module-task/models/task.model";

describe("TaskHttpService", () => {
  let service: TaskHttpService;
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskHttpService],
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", [
      "get",
      "post",
      "delete",
      "patch",
    ]);
    service = new TaskHttpService(httpClientSpy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should be query all tasks", (done: DoneFn) => {
    const expectedTasks: ModelTask[] = [new ModelTask(), new ModelTask()];

    httpClientSpy.get.and.returnValue(of(expectedTasks));
    service.queryList().subscribe({
      next: (tasks) => {
        expect(tasks).withContext("expected tasks").toEqual(expectedTasks);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });
  it("should  query by id task", (done: DoneFn) => {
    const expectedTask = new ModelTask();

    httpClientSpy.get.and.returnValue(of(expectedTask));
    service.queryById(1).subscribe({
      next: (tasks) => {
        expect(tasks).withContext("expected tasks").toEqual(expectedTask);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });
  it("should  create task", (done: DoneFn) => {
    const expectedTask = new ModelTask();

    httpClientSpy.post.and.returnValue(of(expectedTask));
    service.queryCreate(new ModelTask()).subscribe({
      next: (tasks) => {
        expect(tasks).withContext("expected tasks").toEqual(expectedTask);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.post.calls.count()).withContext("one call").toBe(1);
  });
  it("should  delete task", (done: DoneFn) => {
    const expectedTask = new ModelTask();

    httpClientSpy.delete.and.returnValue(of(expectedTask));
    service.queryDelete(1).subscribe({
      next: (tasks) => {
        expect(tasks).withContext("expected tasks").toEqual(expectedTask);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.delete.calls.count()).withContext("one call").toBe(1);
  });
  it("should  edit task", (done: DoneFn) => {
    const expectedTask = new ModelTask();

    httpClientSpy.patch.and.returnValue(of(expectedTask));
    service.queryPatch(new ModelTask()).subscribe({
      next: (tasks) => {
        expect(tasks).withContext("expected tasks").toEqual(expectedTask);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.patch.calls.count()).withContext("one call").toBe(1);
  });
});
