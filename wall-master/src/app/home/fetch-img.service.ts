import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchImgService {
  constructor() {  }
 async get(x){
    
    let ImagesObj=[];
    
    let ImagesApi="https://api.unsplash.com/photos?page="+x+"&per_page=30&query=random&client_id=mdmhKmQVl5apvvD1Gm0YvLedYnRXpra4Xtsx7vGOyCc";
    await fetch(ImagesApi)
    .then(function(response){
      let data=response.json();
      return data;
    })
    .then(function(data)
       { for(let i=0; i<30;i++){
          ImagesObj.push(data[i]);}});
          return ImagesObj;
                        
                        
      }

  async search(s){
    
    let ImagesObj=[];
    
    let ImagesApi="https://api.unsplash.com/search/photos?&query=boob&client_id=mdmhKmQVl5apvvD1Gm0YvLedYnRXpra4Xtsx7vGOyCc";
    console.log(ImagesApi);
    await fetch(ImagesApi)
    .then(function(response){
      let data=response.json();
      return data;
    })
    .then(function(data)
       { for(let i=0; i<30;i++){
          ImagesObj.push(data[i]);}}
          );
          return ImagesObj;
                        
                        
      } 


  
  
}
