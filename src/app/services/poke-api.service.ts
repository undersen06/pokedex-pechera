import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) {
  }

  getPokemonsOffSet(limit = 100, offset = 0) {
    return this.http.get(`${environment.baseUrl}/pokemon?limit=${limit}&offset=${offset}`).toPromise();
  }
  
}
