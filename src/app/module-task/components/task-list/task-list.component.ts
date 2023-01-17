import { ModelTask, Task } from "./../../models/task.model";
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  dataSource: MatTableDataSource<ModelTask>;

  @Input() set tasks(t: ModelTask[]) {
    this.dataSource = new MatTableDataSource<ModelTask>(t?.length ? t : []);
  }

  displayedColumns: Array<keyof Task | "actions"> = [
    "id",
    "label",
    "description",
    "category",
    "done",
    "actions",
  ];
  @Output() eventDelete = new EventEmitter<ModelTask>();
  @Output() eventDone = new EventEmitter<ModelTask>();
  constructor() {}

  ngOnInit(): void {}
  delete(task: ModelTask): void {
    this.eventDelete.emit(task);
  }
  done(event: MatCheckboxChange, task: ModelTask): void {
    this.eventDone.emit(task);
  }
}
