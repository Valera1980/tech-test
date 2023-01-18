import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { ModuleShared } from "@module-shared/module-shared.module";
import { ENUM_TASK_CATEGORY } from "./../../enums/task-category.enum";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskFormComponent } from "./task-form.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("TaskFormComponent", () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      providers: [FormBuilder],
      imports: [
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Input count should be 4", () => {
    const form = fixture.debugElement.nativeElement.querySelector(".task-form");
    const inputs = form.querySelectorAll("input");
    expect(inputs.length).toEqual(4);
  });
  it("Initial form values", () => {
    const form = component.form;
    const initValues = {
      id: null,
      label: "",
      description: "",
      category: ENUM_TASK_CATEGORY.HOUSE,
      done: null,
    };
    expect(form.value).toEqual(initValues);
  });
  it("Test required validation of LABEL", () => {
    const labelControl = component.form.get("label");
    expect(labelControl.errors.required).toBeTruthy();
  });
  it("Test minlength validation of LABEL", () => {
    const labelControl = component.form.get("label");
    labelControl.patchValue("1234");
    expect(labelControl.errors.minlength).toBeTruthy();
  });
  it("Test required validation of DESCRIPTION", () => {
    const labelControl = component.form.get("description");
    expect(labelControl.errors.required).toBeTruthy();
  });
  it("Test minlength validation of DESCRIPTION", () => {
    const labelControl = component.form.get("description");
    labelControl.patchValue("1234");
    expect(labelControl.errors.minlength).toBeTruthy();
  });
});
