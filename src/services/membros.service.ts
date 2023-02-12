import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membro } from 'src/models/Membro';

@Injectable({
  providedIn: 'root',
})
export class MembrosService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public addMembro(membro: any): Observable<Membro> {
    return this.http.post<Membro>(this.baseUrl + 'api/membros', membro);
  }

  public editMembro(membro: any, id: number): Observable<Membro> {
    return this.http.put<Membro>(this.baseUrl + 'api/membros/' + id, membro);
  }

  public getAll(): Observable<any> {
    return this.http.get<Membro[]>(this.baseUrl + 'api/membros');
  }

  public getMembroById(id: number): Observable<Membro> {
    return this.http.get<Membro>(this.baseUrl + 'api/membros/' + id);
  }

  public getMembroBySolicitante(membroId: number): Observable<any> {
    return this.http.get<Membro[]>(
      this.baseUrl + 'api/membros/' + membroId + '/usuario'
    );
  }

  public deleteMembro(id: number): Observable<Membro> {
    return this.http.delete<Membro>(this.baseUrl + 'api/Membros/' + id);
  }
}
