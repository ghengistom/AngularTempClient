import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TemperatureTemplate } from './temperatureTemplate';

@Injectable({
  providedIn: 'root'
})
export class GetTemperatureService {

  private tempUrl = 'http://192.168.86.43:9000/gettemp';
  httpClient: any;

  constructor(
    private http: HttpClient
  ) { }

    
  getTemp(): Observable<any[]> {

    return this.httpClient.get(this.tempUrl)
    .pipe(
      map<any, any[]>((response: any) => {
        console.log('from service' + response);
        return response;
      })
    );
      
    }
    
}
