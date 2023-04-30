import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public categories: any = [];
  public highlights: any = [];
  public featured: any = [];
  public swiperModules = [IonicSlides];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe((result: any) => {
        this.categories = result.categories;
        this.highlights = result.highlights;
        this.featured = result.featured;
      });
  }
}
