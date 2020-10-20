import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FetchImgService } from './fetch-img.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[ trigger('fade',[
    state('void',style({opacity:0,transform:' translate(0px, 5%)'})),
    transition('void<=>*',[animate(100)])
  ]) ]
})
export class HomeComponent implements OnInit {
  ImgsObj;
  showclick=true;
  m=2;
  topnav;
  dialogimg=false;
  dialogimgLink;
  constructor(private getImg: FetchImgService,
    private route: Router) { }
    @HostListener("document:scroll")
    scrollfunction(){
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        this.topnav=true;
      }
      else {
        this.topnav=false;
      }
    }

    ngOnInit(): void {
      this.ImgsObj=this.getImg.get(1);
      console.log(this.ImgsObj)}

 async onScroll(){   
  this.showclick=true;
  console.log('called');
  let newObj=  await this.getImg.get(this.m);
  let temp=  await this.ImgsObj;
  this.ImgsObj= temp.concat(newObj);
   console.log(this.ImgsObj);
   this.m++;
   this.showclick=false;
   }

   dosearch(s){
     console.log(s.value);
     this.route.navigate(['result'],{queryParams:{find:s.value}});

   }

   view(link){
    this.dialogimg=true;
    this.dialogimgLink=link;
   // this.route.navigate(['view'],{queryParams:{view:btoa(JSON.stringify(link))}});
   }

   closeDialog(){
     this.dialogimg=false;
   }
   
   saveas(){
      saveAs(this.dialogimgLink,"image");
   }


}
