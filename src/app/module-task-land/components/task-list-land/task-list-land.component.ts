import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TaskHttpService } from "@module-task/services/task-http/task-http.service";
import { ModelTask } from "@module-task/models/task.model";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-task-list-land",
  templateUrl: "./task-list-land.component.html",
  styleUrls: ["./task-list-land.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListLandComponent implements OnInit {
  tasks$: Observable<ModelTask[]>;
  constructor(
    private _taskHttp: TaskHttpService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.tasks$ = this._taskHttp.queryList();
  }
  create(): void {}

  delete(model: ModelTask): void {
    this.tasks$ = this._taskHttp.queryDelete(model.id).pipe(
      map((data) => {
        this._snackBar.open("Deleted successfully!", "", { duration: 3000 });
        return data;
      }),
      switchMap(() => {
        return this._taskHttp.queryList();
      })
    );
  }
}
