import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { TaskItemLandComponent } from "./components/task-item-land/task-item-land.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListLandComponent } from "./components/task-list-land/task-list-land.component";
import { ModuleTask } from "@module-task/module-task.module";
import { ModuleShared } from "@module-shared/module-shared.module";
import { TaskItemNotFoundComponent } from "./components/task-item-not-found/task-item-not-found.component";

const routes: Routes = [
  {
    path: "list",
    component: TaskListLandComponent,
  },
  {
    path: "item",
    component: TaskItemLandComponent,
  },
  {
    path: "item/:id",
    component: TaskItemLandComponent,
  },
  {
    path: "task-not-found",
    component: TaskItemNotFoundComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "list" },
];

@NgModule({
  declarations: [
    TaskListLandComponent,
    TaskItemLandComponent,
    TaskItemNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModuleTask,
    ModuleShared,
  ],
})
export class ModuleTaskLand {}
