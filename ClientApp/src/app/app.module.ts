import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './component/fetchdata/fetchdata.component';
import { HomeComponent } from './component/home/home.component';
import { NavmenuComponent } from './component/navmenu/navmenu.component';

import { FetchdataService } from './service/fetchdata.service';
import { HomeService } from './service/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'nav-menu', component: NavmenuComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '**', redirectTo: 'app-root' }
    ])
  ],
  providers: [HomeService, FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
