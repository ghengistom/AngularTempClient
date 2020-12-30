import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphTemplate } from '../graphTemplate'
declare let Plotly: any;
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp-graph',
  template:
  `<plotly-plot [data]="graph.data" [layout]="graph.layout"
     [useResizeHandler]="true" [style]="{position: 'relative', width: '75%', height: '75%'}">
  </plotly-plot>`,
  templateUrl: './temp-graph.component.html',
  styleUrls: ['./temp-graph.component.css']
})

export class TempGraphComponent implements OnInit {

  graphTemplate: GraphTemplate[];

  constructor(private httpClient: HttpClient) {
    this.getHistory().subscribe(res => {
      //this.temps = res;
      //TESTER = res[0];
     // this.temps = res[1];
      // = res;
      //this.graphTemplate = res;
    });
   }

  // constructor() {
  //   // this.getHistory().subscribe(res => {
  //   //   //this.temps = res;
  //   //   //this.time = res[0];
  //   //  // this.temps = res[1];
  //   //   //this.getHistory();
      
  //   // });
  //  }


//this is not doing anything
  getHistory(): Observable<any[]> {
    return this.httpClient.get('http://47.151.178.94:9000/gethistory')
    .pipe(
      map<any, any[]>(response => {
        var data = response;
        var results = data;
        var dates = [];
        var temps = [];
        //print(response)
        for(var i=0; i < results.length; ++i) {
  
        dates.push(results[i][0]);
        temps.push(results[i][1]);
        
        }

        var TESTER = document.getElementById('tester');
        Plotly.plot( TESTER, [{
        x: dates,
        y: temps }], {
        margin: { t: 0 } } );

        //console.log(TESTER.animate);
        return response;
      })
      
    );
      
    }

  ngOnInit() {
  }

}
