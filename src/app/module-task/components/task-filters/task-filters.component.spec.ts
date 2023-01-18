import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskFiltersComponent } from "./task-filters.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FilterTask } from "@module-task/models/task-filter.model";

describe("TaskFiltersComponent", () => {
  let component: TaskFiltersComponent;
  let fixture: ComponentFixture<TaskFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFiltersComponent],
      providers: [FormBuilder],
      imports: [
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Input count should be 4", () => {
    const form = fixture.debugElement.nativeElement.querySelector(
      ".task-filters__controls"
    );
    const inputs = form.querySelectorAll("input");
    expect(inputs.length).toEqual(4);
  });
  it("Initial form values", () => {
    const form = component.form;
    const defaults: FilterTask = {
      description: "",
      label: "",
      category: "all",
      start: null,
      end: null,
    };
    expect(form.value).toEqual(defaults);
  });
});
