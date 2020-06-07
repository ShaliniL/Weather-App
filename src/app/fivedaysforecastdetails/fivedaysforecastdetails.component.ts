import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from '../currentweather/currentweather.component';
import { MainDeatilsComponent } from '../currentweatherdetails/currentweatherdetails.component';

@Component({
  selector: 'app-details',
  templateUrl: './fivedaysforecastdetails.component.html',
  styleUrls: ['./fivedaysforecastdetails.component.scss']
})
export class DetailsComponent implements OnInit {

  detialsOfWeather: any = [];
  constructor(private _WeatherData: WeatherService) { }

  ngOnInit() { }

  @Input() selectedCityData: any = [];

  refresh(pcity, index) {
    this.detialsOfWeather = [];
    this._WeatherData.getPresentWeatherDetails(pcity).subscribe(data => {
      this.detialsOfWeather.push(data);
    }, error => {
      console.log(error);
    })
  }
}
