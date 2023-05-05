import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  myNews:any[]=[];
  public:string = "";

  constructor(private service:NewsService) { }

  ionViewWillEnter() {
    this.service.GetNewsData().subscribe((data)=>{this.myNews = data.articles; this.public = data.name;})
  }

}
