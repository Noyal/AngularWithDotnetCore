import { IWeatherForecast } from './../models/weather-forecast';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class FetchdataService {
  originUrl: string = "http://localhost:5000";
  public forecasts: IWeatherForecast[];

  constructor(private http: Http) { }

  WeatherForecasts(): Observable<IWeatherForecast[]> {
    return this.http.get(this.originUrl + '/api/SampleData/WeatherForecasts')
      .map((response: Response) => <IWeatherForecast[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}