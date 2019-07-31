import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule} from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
=======
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
>>>>>>> 3825264a6e166cb194e3cf35720cf94358e1f456

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    HomeComponent,
    AdminComponent,
    MainComponent
=======
    AdminComponent,
    GraphComponent
>>>>>>> 3825264a6e166cb194e3cf35720cf94358e1f456
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    ChartsModule
  ],
  exports: [
    AdminComponent
>>>>>>> 3825264a6e166cb194e3cf35720cf94358e1f456
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
