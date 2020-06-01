import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { MainDeatilsComponent } from './main-deatils/main-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
    MainDeatilsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 ReactiveFormsModule,
 FormsModule 

  ],
  providers: [ SearchComponent,
    DetailsComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
