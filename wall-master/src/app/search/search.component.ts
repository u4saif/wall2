import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './search.service';
import { saveAs } from 'file-saver';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dialogimg=false;
  dialogimgLink;
  searchObj;
  moreImage=[]
  find: string = 'hi';
  constructor(private searchImg: SearchService,
              private aroute: ActivatedRoute, private route: Router) { }

   ngOnInit() {
    this.aroute.queryParams.subscribe((param)=>{
      this.find=param.find;
    });
    let search= this.searchImg.search(this.find);
    this.searchObj=search;
  }  


  view(link){
    this.dialogimg=true;
    this.dialogimgLink=link;
   // this.route.navigate(['view'],{queryParams:{view:btoa(JSON.stringify(link))}});
   }

   dosearch(s){
    this.find=s.value;
    this.searchObj=this.searchImg.search(s.value);

  }

  saveas(){
    saveAs(this.dialogimgLink,"image");
 }

 closeDialog(){
  this.dialogimg=false;
}
 

}
