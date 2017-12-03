import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './components/home/home';
import {AlbumsComponent}   from './components/album/albums';
import {BlogsComponent}   from './components/blog/blogs';
import {AboutComponent}   from './components/about/about';
import {ChatComponent} from './components/chat/chat';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    BlogsComponent,
    AboutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
