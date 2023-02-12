import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/models/Evento';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public addEvento(evento: any): Observable<Evento> {
    return this.http.post<Evento>(this.baseUrl + 'api/eventos', evento);
  }

  public editEvento(evento: any, id: number): Observable<Evento> {
    return this.http.put<Evento>(this.baseUrl + 'api/eventos/' + id, evento);
  }

  public getAll(): Observable<any> {
    return this.http.get<Evento[]>(this.baseUrl + 'api/eventos');
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(this.baseUrl + 'api/eventos/' + id);
  }

  public getEventoBySolicitante(eventoId: number): Observable<any> {
    return this.http.get<Evento[]>(
      this.baseUrl + 'api/eventos/' + eventoId + '/usuario'
    );
  }

  public deleteEvento(id: number): Observable<Evento> {
    return this.http.delete<Evento>(this.baseUrl + 'api/eventos/' + id);
  }
}
