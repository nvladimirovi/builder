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
import { NumberComponentComponent } from './components/number-component/number-component.component';

/**
 * Declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
 * Exports - the subset of declarations that should be visible and usable in the component templates of other modules.
 * Imports - other modules whose exported classes are needed by component templates declared in this module.
 * Providers - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
 * Bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
 */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    ToolsNavComponent,
    LayoutToolsComponent,
    ContentToolsComponent,
    SettingsToolsComponent,
    NumberComponentComponent,
  ],
  exports: [],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
