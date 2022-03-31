import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  getAccountsUrl()
  {
    return this.http.get(
      `${environment.apiUrl}en/account/getallacc`
    );
  }
}
