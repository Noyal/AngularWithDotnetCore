import { IWeatherForecast } from './../../models/weather-forecast';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'fetchdata',
  templateUrl: './fetchdata.component.html',
  providers: [FetchdataService]
})
export class FetchDataComponent implements OnInit {
  public forecasts: IWeatherForecast[];
  originUrl: string = "http://localhost:5000";

  constructor(private fetchdataService: FetchdataService) { }

  ngOnInit() {
    this.fetchdataService.WeatherForecasts().subscribe(forecasts => this.forecasts = forecasts);
  }

}

