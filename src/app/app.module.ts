import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';

//import * as PlotlyJS from 'plotly.js/dist/plotly.js';
//import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
PlotlyViaCDNModule.setPlotlyVersion('1.55.2');

import { AppComponent } from './app.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';
import { TempGraphComponent } from './temp-graph/temp-graph.component';
import { GraphTestComponent } from './graph-test/graph-test.component';

//PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    TemperaturesComponent,
    TempGraphComponent,
    GraphTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    PlotlyViaCDNModule,

    //[CommonModule, PlotlyModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
