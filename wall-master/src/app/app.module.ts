import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ViewImgComponent } from './view-img/view-img.component';
import { environment } from 'src/environments/environment';
import * as fire from '@angular/fire';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ViewImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    InfiniteScrollModule,
    fire.AngularFireModule.initializeApp(environment.firebase),
    MatSliderModule,
    MatIconModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
