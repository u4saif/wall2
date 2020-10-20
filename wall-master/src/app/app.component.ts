import { Component, HostListener } from '@angular/core';
import { FetchImgService } from './home/fetch-img.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'wallsearch';
  topnav=false;
  ImgsObj;
  search=false;
  constructor(private getImg: FetchImgService, private route: Router){}



}
