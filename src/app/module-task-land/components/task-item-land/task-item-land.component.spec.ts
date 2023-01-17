import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemLandComponent } from './task-item-land.component';

describe('TaskItemLandComponent', () => {
  let component: TaskItemLandComponent;
  let fixture: ComponentFixture<TaskItemLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
