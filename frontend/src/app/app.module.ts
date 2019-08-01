import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule} from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { RouterModule } from '@angular/router';
import { GraphHumComponent } from './graph-hum/graph-hum.component';
import { GraphCo2Component } from './graph-co2/graph-co2.component';
import { GraphLuzComponent } from './graph-luz/graph-luz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    MainComponent,
    GraphComponent,
    GraphHumComponent,
    GraphCo2Component,
    GraphLuzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
