import { TaskHttpService } from "@module-task/services/task-http/task-http.service";
import { ModelTask } from "./../../../module-task/models/task.model";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, Subject } from "rxjs";
import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-task-item-land",
  templateUrl: "./task-item-land.component.html",
  styleUrls: ["./task-item-land.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemLandComponent implements OnInit, OnDestroy {
  readonly destroy$ = new Subject<void>();
  currentTask: ModelTask;
  currentTitle = "";
  isFormValid: boolean;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _taskHttp: TaskHttpService,
    private _router: Router,
    private _title: Title,
    private _cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        takeUntil(this.destroy$),
        mergeMap((params) => {
          const id = params["id"];
          if (id) {
            return this._queryTask(id);
          }
          return of(new ModelTask());
        })
      )
      .subscribe((task) => {
        this.currentTask = task;
        this._title.setTitle(task.id ? "Edit" : "New");
        this.currentTitle = task.id
          ? `Editing task "${task.label}"`
          : "Create new task";
        this._cd.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  private _queryTask(id: number): Observable<ModelTask | never> {
    return this._taskHttp.queryById(id).pipe(
      catchError((e) => {
        this._router.navigate(["/tasks/task-not-found"]);
        return of(undefined);
      })
    );
  }
  change(task: ModelTask): void {
    console.log(task);
    this.currentTask = task;
  }
  formState(state: boolean): void {
    this.isFormValid = state;
  }
  createOrEdit(): void {
    if (!this.isFormValid) {
      return;
    }
    if (!this.currentTask.id) {
      this._taskHttp.queryCreate(this.currentTask).subscribe(() => {
        this._snackBar.open("Created successfully!", "", { duration: 3000 });
        this._router.navigate(["/tasks/list"]);
      });
    } else {
      this._taskHttp.queryPatch(this.currentTask).subscribe(() => {
        this._snackBar.open("Edited successfully!", "", { duration: 3000 });
        this._router.navigate(["/tasks/list"]);
      });
    }
  }
  cancel(): void {
    this._router.navigate(["/tasks/list"]);
  }
}
