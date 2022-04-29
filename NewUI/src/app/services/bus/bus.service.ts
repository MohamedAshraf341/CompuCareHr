import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusService {


  constructor(private http: HttpClient) { }
  getBusUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=1`
    );
  }
  getBusIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=1`
    );
  }
  addBus(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=1`,data
    );
  }

  editBus(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=1`,data
    );
  }
  deleteBus(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=1`
    );
  }
}
