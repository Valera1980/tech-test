import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("ConfirmDialogComponent", () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  const testTitle = "Test title for dialog";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [
        MatDialog,
        { provide: MAT_DIALOG_DATA, useValue: { msg: testTitle } },
        { provide: MatDialogRef, useValue: {} },
      ],
      imports: [MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should has two buttons", () => {
    const form =
      fixture.debugElement.nativeElement.querySelector(".confirm__bar");
    const inputs = form.querySelectorAll("button");
    expect(inputs.length).toEqual(2);
  });
  it("should has title", () => {
    const element = fixture.debugElement.query(By.css(".confirm__text"));
    expect(element.nativeElement.innerText).toEqual(testTitle);
  });
});
