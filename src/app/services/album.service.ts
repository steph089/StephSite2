import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class AlbumService {

  constructor(private http: Http) {}

  getAlbums(): Promise<any> {
    return this.http.get("http://steph89.com/PHP/albums.php")
               .toPromise()
               .then(response => response.json().data);
  }
}
