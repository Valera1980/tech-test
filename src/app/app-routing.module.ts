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
  {
    path: "page-404",
    loadChildren: async () =>
      (await import("app/module-page-not-found/module-page-not-found.module"))
        .ModulePageNotFound,
  },
  {
    path: "**",
    redirectTo: "/page-404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
