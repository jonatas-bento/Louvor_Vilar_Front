import { SongsService } from './../../../services/songs.service';
import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/models/Song';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Template',
  templateUrl: './Template.component.html',
  styleUrls: ['./Template.component.css'],
})
export class TemplateComponent implements OnInit {
  entrySong!: Song;
  id!: number;
  workedLetter: any;
  constructor(
    private _song: SongsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id')!;
    this._song.getsongById(this.id).subscribe((result) => {
      this.entrySong = result;
      this.workedLetter = result.letra.split('-');
    });
  }
}
