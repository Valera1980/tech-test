import { Router, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { TaskFilterService } from "@module-task/services/task-filter/task-filter.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskHttpService } from "@module-task/services/task-http/task-http.service";

import { TaskListLandComponent } from "./task-list-land.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("TaskListLandComponent", () => {
  let component: TaskListLandComponent;
  let fixture: ComponentFixture<TaskListLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListLandComponent],
      providers: [TaskHttpService, TaskFilterService, MatSnackBar, MatDialog],
      imports: [
        HttpClientModule,
        RouterModule,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(TaskListLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
