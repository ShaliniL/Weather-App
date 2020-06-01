import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 import { Router } from '@angular/router'; 



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityList:any = [];
  city_name:any;
  details:any;
  errmsg:string;
  list;
  testname:any = [];
  constructor(private  city:WeatherService,private http: HttpClient,private router: Router) { }

   ngOnInit() {
    
     
  }

  searchweather() {
    // TODO: Use EventEmitter with form val
    this.city.getConfig(this.profileForm.value.city_name).subscribe(data=>{
     this.list = data;
     if(this.cityList.length > 8){
      this.cityList.pop();
     }
     this.cityList.unshift(this.list);
      //console.log(this.cityList);
      this.clear();

    }, error => {
      this.errmsg = JSON.stringify(error.error.message);
      alert(this.errmsg);
    })
  }
  
  profileForm = new FormGroup({
    city_name: new FormControl('')
    })
 

    clear(){
     // console.log(this.profileForm.value.city_name);
      //this.profileForm.value.city_name.length = '';
      //console.log(this.profileForm.value.city_name);
    }

    popitems(i){
       this.cityList.splice(i,1);

    }

    clearall(){
      this.cityList.length = [];
    }

    refreshweather(city_name, index){
     this.city.getConfig(city_name).subscribe(data=>{
     this.list = data;
      this.cityList.splice(index,1,this.list);
     // console.log("this is refresh list"+ this.cityList);
    }, error => {
      this.errmsg = JSON.stringify(error.error.message);
      alert(this.errmsg);
    })
    }

    getdetails(testname,i){
      localStorage.setItem("lcityname",testname);
      this.city.forcastdetails(testname).subscribe(data=>{
        this.details = data;
        this.testname.splice(testname,1,this.details);
        this.details.list.splice(5,this.details.list.length-5);
        
        //var a = this.refreshweather(city_name, index);
       // console.log(a);

       }, error => {
         this.errmsg = JSON.stringify(error.error.message);
         alert(this.errmsg);
       })
     
    }
}
