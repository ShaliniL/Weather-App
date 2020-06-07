import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './currentweather/currentweather.component';
import { DetailsComponent } from './fivedaysforecastdetails/fivedaysforecastdetails.component';

const routes: Routes = [ { path: 'details', component: DetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
