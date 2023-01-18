import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TaskItemNotFoundComponent } from "./task-item-not-found.component";

describe("TaskItemNotFoundComponent", () => {
  let component: TaskItemNotFoundComponent;
  let fixture: ComponentFixture<TaskItemNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskItemNotFoundComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should has title", () => {
    const element = fixture.debugElement.query(By.css(".task-item-not-found"));
    expect(element.nativeElement.innerText).toEqual("task item is not found");
  });
});
