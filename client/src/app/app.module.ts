import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Service 
import { CollectableService } from "app/shared/collectable/collectable.service";

//Routing 
import { AppRoutingModule } from "app/app-routing.module";

//Components
import { AppComponent } from './app.component';
import { CollectionComponent } from "./components/collection/collection.component";
import { HeaderComponent } from './components/header/header.component';
import { ToolsNavComponent } from './components/tools-nav/tools-nav.component';
import { LayoutToolsComponent } from './components/layout-tools/layout-tools.component';
import { ContentToolsComponent } from './components/content-tools/content-tools.component';
import { SettingsToolsComponent } from './components/settings-tools/settings-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    ToolsNavComponent,
    LayoutToolsComponent,
    ContentToolsComponent,
    SettingsToolsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
