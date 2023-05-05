import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  myWeather:any[]=[];
  location:string = "";

  constructor(private service:WeatherService) { }

  ngOnInit(): void {
    this.service.getWeatherDate().subscribe((data)=>
    {

      this.myWeather = data.weather;
      this.location = data.name;
    }
    );
  }

}
