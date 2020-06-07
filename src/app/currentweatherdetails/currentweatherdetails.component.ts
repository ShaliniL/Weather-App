import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../currentweather/currentweather.component';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-deatils',
  templateUrl: './currentweatherdetails.component.html',
  styleUrls: ['./currentweatherdetails.component.scss']
})
export class MainDeatilsComponent implements OnInit {
  constructor(private _weatherforecast: WeatherService, private http: HttpClient) { }
  ctname: string = localStorage.getItem("lcityname");
  ngOnInit() {
    this.getforecastdetails(this.ctname);
  }
  @Input() detialsOfWeather: any = [];

  getforecastdetails(city_name) {
    this.detialsOfWeather = [];
    this._weatherforecast.getPresentWeatherDetails(city_name).subscribe(data => {      
      this.detialsOfWeather.push(data);
    }, error => {
      console.log(error);
    })
  }

}
