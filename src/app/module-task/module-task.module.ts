import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskHttpService } from "./services/task-http/task-http.service";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskFilterService } from "./services/task-filter/task-filter.service";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskCategoryPipe } from "./pipes/task-category/task-category.pipe";
import { TaskDonePipe } from "./pipes/task-done/task-done.pipe";
import { ModuleShared } from "@module-shared/module-shared.module";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskFiltersComponent } from "./components/task-filters/task-filters.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";

@NgModule({
  declarations: [
    TaskListComponent,
    TaskCategoryPipe,
    TaskDonePipe,
    TaskFormComponent,
    TaskFiltersComponent,
  ],
  exports: [TaskListComponent, TaskFormComponent, TaskFiltersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModuleShared,
    RouterModule,
  ],
  providers: [TaskHttpService, TaskFilterService],
})
export class ModuleTask {}
