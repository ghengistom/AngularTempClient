import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphTemplate } from './graphTemplate';
declare let Plotly: any;
import { PlotlyModule } from 'angular-plotly.js';

@Injectable({
  providedIn: 'root'
})
export class GetTemphistoryService {

  private tempUrl = 'http://192.168.86.43:9000/gethistory';
  httpClient: any;

  constructor() {
    http: HttpClient;
   }

   getHistory(): Observable<any[]> {

    return this.httpClient.get(this.tempUrl)
    .pipe(
      map<any, any[]>(response => {
        var data;
        var results = response;
        var dates = [];
        var temps = [];
        for(var i=0; i < results.length; ++i) {
  
        dates.push(results[i][0]);
        temps.push(results[i][1]);
        }

        //var TESTER = document.getElementById('tester');
        Plotly.plot( data, [{
        x: dates,
        y: temps }], {
        margin: { t: 0 } } );

        console.log(response.temps);
        return data;
      })
      
    );
      
    }


}
