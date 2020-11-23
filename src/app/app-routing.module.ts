import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './Main/app.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'', component: AppComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'spots', loadChildren: ()=> import('./Pages/spots/spots.module').then(m => m.SpotsModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }