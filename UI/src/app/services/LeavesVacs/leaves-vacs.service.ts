import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeavesVacsService {

  constructor(private http: HttpClient) { }
  getLeavesVacs()
  {
    return this.http.get(
      `${environment.apiUrl}LeavesVacs`
    );
  }
  getLeavesVacsIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}LeavesVacs/${Id}`
    );
  }
}
