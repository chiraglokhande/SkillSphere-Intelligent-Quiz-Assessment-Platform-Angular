import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }


  registerUser(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/user/register", user, { responseType: 'text' });
  }
}
