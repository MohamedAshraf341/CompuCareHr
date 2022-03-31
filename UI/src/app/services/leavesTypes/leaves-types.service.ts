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
      `${environment.apiUrl}ar/leavestypes`
    );
  }
  getLeavesTypesIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}ar/leavestypes/${Id}`
    );
  }
}
