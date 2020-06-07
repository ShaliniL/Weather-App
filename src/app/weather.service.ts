import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  
  getPresentWeatherDetails(pcityname): Observable<any> {
    return this.http.post(environment.api_url + `weather?q=` + pcityname + environment.app_id, pcityname)
    .pipe(catchError(this.handleError));
  }
  
  getForecastdetails(pcityname) {
    return this.http.post(environment.api_url + `forecast?q=` + pcityname + `&mode=json` + environment.app_id, pcityname)
    .pipe(catchError(this.handleError));
  }

  handleError(error){
    return throwError(error.message || "Server Error");
  }
}
