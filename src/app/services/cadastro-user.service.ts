import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroUserService {
  private apiUrl = 'http://localhost:3000/api'; // Substitua pela URL do seu back-end

  constructor(private http: HttpClient) {}

  public cadastrarUsuario(formData: any): Observable<any> {
    console.log('formData', formData);
    const url = `${this.apiUrl}/users`; // Substitua pela rota apropriada no seu back-end
    return this.http.post(url, formData);
  }
}
