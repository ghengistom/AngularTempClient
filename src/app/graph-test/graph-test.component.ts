import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

var data: any;
//var results: any;
var dates = [];
var temps = [];

@Component({
  selector: 'app-graph-test',
  templateUrl: './graph-test.component.html',
  styleUrls: ['./graph-test.component.css'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
})
export class GraphTestComponent implements OnInit {
  graph: { data: { x: any[]; y: any[]; type: string; mode: string; marker: { color: string; }; }[]; layout: { width: number; height: number; title: string; }; };

  // constructor() { }
  constructor(private httpClient: HttpClient) 
  {
    
      this.getHistory().subscribe(res => {
        data = res;
        //results = data;
        dates = [];
        temps = [];
        //print(response)
        for(var i=0; i < data.length; ++i) {
  
        dates.push(data[i][0]);
        temps.push(data[i][1]);
        
        }
        //console.log('from constructor' + temps)

        this.graph = {
          data: [
              { x: dates, y: temps, type: 'simple', mode: 'lines+points', marker: {color: 'red'} },
              // { x: temps, y: dates, type: 'line' },
          ],
          layout: {width: 1100, height: 400, title: 'Temperature Vs Time Graph'}
      };

        
    },);
   }

  getHistory(): Observable<any[]> {
    //return this.httpClient.get('http://192.168.4.87:9000/gethistory')
    return this.httpClient.get('http://47.154.152.89:9000/gethistory')

    .pipe(
      map<any, any[]>(response => {
        data = response;
        return data;
      })
    );
      
    }
//
  ngOnInit() {
  }

}

