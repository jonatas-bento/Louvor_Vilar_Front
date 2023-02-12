import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ensaio } from 'src/models/Ensaio';

@Injectable({
  providedIn: 'root',
})
export class EnsaiosService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  public addEnsaio(ensaio: any): Observable<Ensaio> {
    return this.http.post<Ensaio>(this.baseUrl + 'api/ensaios', ensaio);
  }

  public editEnsaio(ensaio: any, id: number): Observable<Ensaio> {
    return this.http.put<Ensaio>(this.baseUrl + 'api/ensaios/' + id, ensaio);
  }

  public getAll(): Observable<any> {
    return this.http.get<Ensaio[]>(this.baseUrl + 'api/ensaios');
  }

  public getEnsaioById(id: number): Observable<Ensaio> {
    return this.http.get<Ensaio>(this.baseUrl + 'api/Ensaios/' + id);
  }

  public getEnsaioBySolicitante(ensaioId: number): Observable<any> {
    return this.http.get<Ensaio[]>(
      this.baseUrl + 'api/ensaios/' + ensaioId + '/usuario'
    );
  }

  public deleteEnsaio(id: number): Observable<Ensaio> {
    return this.http.delete<Ensaio>(this.baseUrl + 'api/ensaios/' + id);
  }
}
