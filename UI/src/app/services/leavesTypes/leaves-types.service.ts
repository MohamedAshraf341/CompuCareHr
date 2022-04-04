import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeavesTypesService {

  constructor(private http: HttpClient) { }
  getLeavesTypes()
  {
    return this.http.get(
      `${environment.apiUrl}ar/leaves/1`
    );
  }
  getLeaveserrand()
  {
    return this.http.get(
      `${environment.apiUrl}ar/leaves/2`
    );
  }
  getLeavespermission()
  {
    return this.http.get(
      `${environment.apiUrl}ar/leaves/3`
    );
  }
  getLeavesTypesIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}ar/leavestypes/${Id}`
    );
  }
}
