import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TemperatureTemplate } from '../temperatureTemplate';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.component.html',
  styleUrls: ['./temperatures.component.css']
})
export class TemperaturesComponent implements OnInit {

  // temperatureTemplate: TemperatureTemplate = {
  //   date: new Date,
  //   temperature: Float32Array
  // }
  // temps2: any[];
  // time2: any[];

  //This is 1 way to display data as type string and time
  temps: any[]
  time: any[]
  constructor(private httpClient: HttpClient) {
    this.getTemp().subscribe(res => {
      //this.temps = res;
      this.time = res[0];
     // this.temps = res[1];
      
    });
   }

   

  //  constructor(private httpClient: HttpClient) {
  //   let temperaturetemplate = new TemperatureTemplate();
  //   this.getTemp().subscribe(res => {
  //     temperaturetemplate.date = res[0];
  //     temperaturetemplate.time = res[1];
  //     //temperaturetemplate.temperature: res[1]
  //     //this.temps2 = res;
  //     //this.time = res[0];
  //     //this.time2 = res[1];
      
  //   });
  //  }
  
  getTemp(): Observable<any[]> {

    return this.httpClient.get('http://192.168.4.71:9000/gettemp')
    .pipe(
      map<any, any[]>(response => {
        console.log(response);
        return response;
      })
    );
      
    }

    
  
  ngOnInit() {
   
  }

}
