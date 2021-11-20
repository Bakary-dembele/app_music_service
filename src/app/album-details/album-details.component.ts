
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ALBUM_LISTS } from '../mockup/mock-albums';
import { Album, List } from '../model/album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  songs: Array<string>;
  albumListe: List[] = ALBUM_LISTS;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.album) {
      this.songs = this.albumListe.find(elem => elem.id === this.album.id).list
    }
  }

  play(album: Album) {
    this.onPlay.emit(album);
  }
}


