import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components
import { LayoutToolsComponent } from "./components/layout-tools/layout-tools.component";
import { ContentToolsComponent } from "./components/content-tools/content-tools.component";
import { SettingsToolsComponent } from "./components/settings-tools/settings-tools.component";

const routes: Routes = [
  { path: "", redirectTo: "/content-tools", pathMatch: "full" },
  { path: "layout-tools", component: LayoutToolsComponent },
  { path: "content-tools", component: ContentToolsComponent },
  { path: "settings-tools", component: SettingsToolsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
