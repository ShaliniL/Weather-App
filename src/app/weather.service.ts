import { Injectable} from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  configUrl = '';

getConfig(city_name) {
  return this.http.post(`http://api.openweathermap.org/data/2.5/weather?q=`+city_name+`&appid=c51223c219d6aec8cb8c5210449bd859`,city_name);
}

forcastdetails(city_name){
  return this.http.post(`http://api.openweathermap.org/data/2.5/forecast?q=`+city_name+`&mode=json&appid=c51223c219d6aec8cb8c5210449bd859`,city_name);
}
}
