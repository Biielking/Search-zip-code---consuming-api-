import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { viacepResult } from '../models/viacepResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viacepUrl;

  constructor(private http:HttpClient) { }
  // Metodo para pegar o cep e fazer a requisição com api trazendo os dados
  getEnderecobyCep(cep: string) {
    return this.http.get<viacepResult>
    (this.apiUrl + cep + "/json")
    .pipe(
      map((response) => {
        return response;
      })
    )
  }
}
