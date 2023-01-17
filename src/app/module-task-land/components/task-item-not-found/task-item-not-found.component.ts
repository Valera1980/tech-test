import { ChangeDetectionStrategy } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-item-not-found",
  templateUrl: "./task-item-not-found.component.html",
  styleUrls: ["./task-item-not-found.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
