import { Component, OnInit,Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-deatils',
  templateUrl: './main-deatils.component.html',
  styleUrls: ['./main-deatils.component.scss']
})
export class MainDeatilsComponent implements OnInit {

  constructor(private  _weatherforcast:WeatherService,private http: HttpClient) { }
  detialsOfWeather:any = [];
  errmsg:string;                                                                              
  ctname:string = localStorage.getItem("lcityname");
  ngOnInit() {
    this.getforcastdetails(this.ctname);
  }
  //@Input() tdetails:any =[];

  getforcastdetails(city_name){
      this._weatherforcast.getConfig(city_name).subscribe(data=>{
        this.detialsOfWeather.push(data);

         //this.tdetails.splice(index,1,this.tdetails);
         console.log("forcast details logs"+ JSON.stringify(this.detialsOfWeather));
        }, error => {
          this.errmsg = JSON.stringify(error.error.message);
          alert(this.errmsg);
        })
    
  }
  
}
