import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/models/Song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public addSong(song: any): Observable<Song> {
    return this.http.post<Song>(this.baseUrl + 'api/songs', song);
  }

  public editSong(song: any, id: number): Observable<Song> {
    return this.http.put<Song>(this.baseUrl + 'api/songs/' + id, song);
  }

  public getAll(): Observable<any> {
    return this.http.get<Song[]>(this.baseUrl + 'api/songs');
  }

  public getsongById(id: number): Observable<Song> {
    return this.http.get<Song>(this.baseUrl + 'api/songs/' + id);
  }

  public getsongBySolicitante(songId: number): Observable<any> {
    return this.http.get<Song[]>(
      this.baseUrl + 'api/songs/' + songId + '/usuario'
    );
  }
  //
  public deletesong(id: number): Observable<Song> {
    return this.http.delete<Song>(this.baseUrl + 'api/songs/' + id);
  }
}
