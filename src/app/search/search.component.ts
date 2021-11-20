import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { Album } from '../model/album';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();
  
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const results = this.albumService.search(form.value.word);
    if (results.length > 0) {
      this.searchAlbums.emit(results);
      }
    }

}
