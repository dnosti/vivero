import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin_', component: AdminComponent },
  { path: '**', redirectTo: '/'}
];

export const Routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


