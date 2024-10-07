import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private apiUrl = 'http://worldtimeapi.org/api/timezone/America/Sao_Paulo';

  constructor(private http: HttpClient) { }

  // Método para obter data e hora
  getTime(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
