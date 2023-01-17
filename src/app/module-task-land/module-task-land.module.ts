import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListLandComponent } from "./components/task-list-land/task-list-land.component";

const routes: Routes = [
  {
    path: "list",
    component: TaskListLandComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "list" },
];

@NgModule({
  declarations: [TaskListLandComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ModuleTaskLand {}
