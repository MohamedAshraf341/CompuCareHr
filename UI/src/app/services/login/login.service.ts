import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getLoginUrl(Username:any,password:any)
  {
    return this.http.get(
      `${environment.apiUrl}ar/login/login/${Username}/${password}`
    );
  }
}
