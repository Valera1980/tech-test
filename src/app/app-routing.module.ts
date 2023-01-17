import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks/list",
    pathMatch: "full",
  },
  {
    path: "tasks",
    loadChildren: async () =>
      (await import("./module-task-land/module-task-land.module"))
        .ModuleTaskLand,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
