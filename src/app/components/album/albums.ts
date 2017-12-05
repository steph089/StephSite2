import { Component, OnInit  } from '@angular/core';

import {AlbumService} from '../../services/album.service';

@Component({
 selector: 'albums',
templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {

albums: any;

 constructor(    private albumService:  AlbumService   )     {  }

 ngOnInit(): void {
    this.albumService.getAlbums()
        .then(data => this.albums = data)
 }
}
