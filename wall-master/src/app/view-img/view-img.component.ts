import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-img',
  templateUrl: './view-img.component.html',
  styleUrls: ['./view-img.component.css']
})
export class ViewImgComponent implements OnInit {
  imgLink;
  constructor(private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe((param)=>{
      this.imgLink=JSON.parse(atob(param.view));
    });
    console.log(this.imgLink);
  
  }
  

}
