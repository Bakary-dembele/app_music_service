import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ALBUMS, ALBUM_LISTS } from '../mockup/mock-albums';
import { Album, List } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  //import de models
  private albums: Album[] = ALBUMS;
  private albumListe: List[] = ALBUM_LISTS;

  subjectAlbum = new Subject<Album>(); 
  constructor() { }

  getAlbums(): Album[] {
    return this.albums.sort((a, b) => b.duration - a.duration);
  }

  getAlbum(id: string) {
    return this.albums.find(album => album.id === id)
  }

  getAlbumList(id: string) {
    return this.albumListe.find(list => list.id === id);
  }

  count() {
    return this.albums.length;
  }

  paginate(start: number, end: number): Album[] {
    return this.albums.sort((a, b) => b.duration - a.duration).slice(start, end)
  }

  search(word: string): Album[] {
    let re = new RegExp(word.trim(), 'g');
    return this.albums.filter(album => album.title.match(re) && album.title.match(re).length > 0);
  }

  switchOn(album: Album) {

    this.albums.forEach(
      a => {
        if (a.ref === album.ref) { album.status = 'on'; }
        else {
          a.status = 'off';
        }
      }
    );
  
    this.subjectAlbum.next(album); 
  }

  switchOff(album: Album) {
    this.albums.forEach(
      a => {
        a.status = 'off';
      }
    );
  }

}