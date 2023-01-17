import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemNotFoundComponent } from './task-item-not-found.component';

describe('TaskItemNotFoundComponent', () => {
  let component: TaskItemNotFoundComponent;
  let fixture: ComponentFixture<TaskItemNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
