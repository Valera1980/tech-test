import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListLandComponent } from './task-list-land.component';

describe('TaskListLandComponent', () => {
  let component: TaskListLandComponent;
  let fixture: ComponentFixture<TaskListLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
