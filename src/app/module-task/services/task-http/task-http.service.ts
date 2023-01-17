import { ModelTask, Task } from "./../../models/task.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class TaskHttpService {
  private readonly _apiList = "http://localhost:3000/tasks";

  constructor(private _http: HttpClient) {}

  queryList(): Observable<ModelTask[]> {
    return this._http.get<Task[]>(this._apiList).pipe(
      map((tasks) => tasks.map((t) => new ModelTask(t))),
      catchError((e) => throwError(e))
    );
  }
}
