import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { WeatherData } from './Models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  constructor(private weatherservice: WeatherService) { }

  cityName : string = 'Durg';
  weatherData?: WeatherData;

  convertToCelsius(temp: number): number {
    return (temp - 32) * 5 / 9;
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName : string){
    this.weatherservice.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }
}
