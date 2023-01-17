import { Nullable } from "@global-models/nullable.type";
import { ModelTask, Task } from "./../../models/task.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class TaskHttpService {
  private readonly _api = "http://localhost:3000/tasks";

  constructor(private _http: HttpClient) {}

  queryList(): Observable<ModelTask[]> {
    return this._http.get<Task[]>(this._api).pipe(
      map((tasks) => tasks.map((t) => new ModelTask(t))),
      catchError((e) => throwError(e))
    );
  }
  queryById(id: number): Observable<Nullable<ModelTask>> {
    return this._http
      .get<Nullable<Task>>(this._api + "/" + id)
      .pipe(map((task) => (task ? new ModelTask(task) : undefined)));
  }
  queryCreate(model: ModelTask): Observable<ModelTask> {
    return this._http
      .post<Task>(this._api, {
        category: model.category,
        description: model.description,
        done: model.done,
        label: model.label,
      } as Partial<Task>)
      .pipe(
        map((t) => new ModelTask(t)),
        catchError((e) => throwError(e))
      );
  }
  queryDelete(id: number): Observable<unknown> {
    return this._http
      .delete<unknown>(this._api + "/" + id)
      .pipe(catchError((e) => throwError(e)));
  }
  queryPatch(model: ModelTask): Observable<unknown> {
    return this._http
      .patch<unknown>(this._api + "/" + model.id, {
        category: model.category,
        description: model.description,
        done: model.done,
        label: model.label,
      })
      .pipe(catchError((e) => throwError(e)));
  }
  queryDone(model: ModelTask): Observable<unknown> {
    const date = new Date();
    return this._http
      .patch<unknown>(this._api + "/" + model.id, {
        category: model.category,
        description: model.description,
        done: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        label: model.label,
      })
      .pipe(catchError((e) => throwError(e)));
  }
}
