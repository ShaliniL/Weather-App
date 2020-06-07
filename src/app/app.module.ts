import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './currentweather/currentweather.component';
import { DetailsComponent } from './fivedaysforecastdetails/fivedaysforecastdetails.component';
import { FormsModule } from '@angular/forms';
import { MainDeatilsComponent } from './currentweatherdetails/currentweatherdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
    MainDeatilsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [SearchComponent,
    DetailsComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
