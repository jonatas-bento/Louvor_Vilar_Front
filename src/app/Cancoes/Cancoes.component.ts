import { MatTableDataSource } from '@angular/material/table';
import { SongsService } from './../../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/models/Song';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-Cancoes',
  templateUrl: './Cancoes.component.html',
  styleUrls: ['./Cancoes.component.css'],
})
export class CancoesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'versao', 'artista', 'actions'];

  songs!: MatTableDataSource<Song>;
  constructor(private _song: SongsService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._song.getAll().subscribe((result) => {
      console.log(result);
      this.songs = new MatTableDataSource(result);
    });
  }
}
