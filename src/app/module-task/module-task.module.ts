import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskHttpService } from "./services/task-http/task-http.service";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskFilterService } from "./services/task-filter/task-filter.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [TaskHttpService, TaskFilterService],
})
export class ModuleTask {}
