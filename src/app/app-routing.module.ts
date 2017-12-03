import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }   from './components/home/home';
import { AlbumsComponent }   from './components/album/albums';
import { BlogsComponent }   from './components/blog/blogs';
import { AboutComponent }   from './components/about/about';
import { ChatComponent }   from './components/chat/chat';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'albums',  component: AlbumsComponent },
  { path: 'blog',  component: BlogsComponent },
  { path: 'about',  component: AboutComponent },
  //music
  { path: 'chat',  component: ChatComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}