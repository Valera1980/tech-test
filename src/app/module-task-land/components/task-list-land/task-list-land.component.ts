import { FilterTask } from "@module-task/models/task-filter.model";
import { map, switchMap, takeUntil, tap } from "rxjs/operators";
import { Observable, of, Subject } from "rxjs";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { TaskHttpService } from "@module-task/services/task-http/task-http.service";
import { ModelTask } from "@module-task/models/task.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "@module-shared/components/confirm-dialog/confirm-dialog.component";
import { ConfirmData } from "@global-models/confirms-data.model";
import { TaskFilterService } from "@module-task/services/task-filter/task-filter.service";

@Component({
  selector: "app-task-list-land",
  templateUrl: "./task-list-land.component.html",
  styleUrls: ["./task-list-land.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListLandComponent implements OnInit, OnDestroy {
  tasks$: Observable<ModelTask[]>;
  tasksSync: ModelTask[] = []; //for filtering
  destroy$ = new Subject();
  constructor(
    private _taskHttp: TaskHttpService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _cd: ChangeDetectorRef,
    private _filterTasks: TaskFilterService
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.tasks$ = this._taskHttp
      .queryList()
      .pipe(map((tasks) => (this.tasksSync = tasks)));
  }

  delete(model: ModelTask): void {
    const ref = this._dialog.open(ConfirmDialogComponent, {
      data: { msg: `Would you like delete "${model.label}"?` } as ConfirmData,
      width: "350px",
      disableClose: true,
    });

    ref
      .afterClosed()
      .pipe(
        takeUntil(this.destroy$),
        switchMap((response: any) => {
          if (response.action === "ok") {
            return this._taskHttp
              .queryDelete(model.id)
              .pipe(map(() => ({ response })));
          }
          return of({ response });
        }),
        switchMap(({ response }) => {
          if (response.action === "ok") {
            this.tasks$ = this._taskHttp.queryList();
            this._cd.detectChanges();
          }
          return of({ response });
        })
      )
      .subscribe(({ response }) => {
        if (response.action === "ok") {
          this._snackBar.open("Deleted successfully!", "", { duration: 3000 });
        }
      });
  }
  done(model: ModelTask): void {
    const ref = this._dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Would you like mark as done "${model.label}"?`,
      } as ConfirmData,
      width: "350px",
      disableClose: true,
    });

    ref
      .afterClosed()
      .pipe(
        takeUntil(this.destroy$),
        switchMap((response: any) => {
          console.log(response);
          if (response.action === "ok") {
            return this._taskHttp
              .queryDone(model)
              .pipe(map(() => ({ response })));
          }
          return of({ response });
        }),
        switchMap(({ response }) => {
          this.tasks$ = this._taskHttp.queryList();
          this._cd.detectChanges();
          return of({ response });
        })
      )
      .subscribe(({ response }) => {
        if (response.action === "ok") {
          this._snackBar.open("Deleted successfully!", "", { duration: 3000 });
        }
      });
  }
  filterChange(filter: FilterTask): void {
    this.tasks$ = of(this._filterTasks.filter(this.tasksSync, filter));
  }
  clear(): void {
    this.tasks$ = this._taskHttp.queryList();
    this._cd.detectChanges();
  }
}
