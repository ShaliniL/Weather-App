import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.scss']
})
export class SearchComponent implements OnInit {
  tempArr: any = [];
  tempCityName: any;
  forecastArr: any = [];
  selectedCityData: any = [];

  constructor(private _presentWeatherData: WeatherService, private http: HttpClient) { }
  ngOnInit() { }

  //get value from input field
  search = new FormControl('');

  //present weather from api - on click of + icon
  presentWeather() {
    this._presentWeatherData.getPresentWeatherDetails(this.search.value).subscribe(data => {
      //if the search results exceeds 8, remove the city which was searched first
      if (this.tempArr.length > 8) {
        this.tempArr.pop();
      }
      this.tempArr.unshift(data);
      this.search.reset(); //clearing input field after search
    }, error => {
      console.log(error);
    })
  }

  //remove item from array - on click of remove icon
  removeCity(i) {
    this.tempArr.splice(i, 1);
  }

  //clear tempArr - on click of clearAll button at the bottom 
  clearAll() {
    this.tempArr.length = [];
  }

  //refresh weather - on click of refresh icon
  refreshweather(tempCityName, index) {
    this._presentWeatherData.getPresentWeatherDetails(tempCityName).subscribe(data => {
      this.tempArr.splice(index, 1, data);
    }, error => {
      console.log(error);
    })
  }

  //on click get details
  forecastDetails(cityname, i) {
    localStorage.setItem("lcityname", cityname);
    //this.selectedCityData = cityname;
    this._presentWeatherData.getForecastdetails(cityname).subscribe(data => {
      this.forecastArr = data;
      this.selectedCityData.splice(cityname, 1, this.forecastArr);
      this.forecastArr.list.splice(5, this.forecastArr.list.length - 5);
    }, error => {
      console.log(error);
    })
  }
}
