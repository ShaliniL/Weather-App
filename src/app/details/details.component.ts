import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from '../search/search.component';
import { MainDeatilsComponent } from '../main-deatils/main-deatils.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


list:any= [];
errmsg:string;
   constructor(private  city:WeatherService) {
    
   }

  ngOnInit() {

 console.log(this.testname);
 console.log(this.cityList);
    
  }
  
  @Input() testname:any =[];

  @Input() cityList:any =[];

}
