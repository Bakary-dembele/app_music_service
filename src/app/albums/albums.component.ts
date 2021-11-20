import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page princiaple Albums Music"; 
  albums: Album[];               
  selectedAlbum: Album; 
  status: string; 

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void { 
    this.albums = this.albumService.paginate(0, 10);
    console.log(this.albumService.count(), "le nombre d'albums")
  }

  onSelect(album: Album) {
    this.selectedAlbum = album;
  }

  playParent($event) {
    this.status = $event.id;
    this.albumService.switchOn($event);
  }

  search($event) {
    if ($event) { this.albums = $event; }
  }

  paginate($event) {
    this.albums = this.albumService.paginate($event.start, $event.end);
  }
}
