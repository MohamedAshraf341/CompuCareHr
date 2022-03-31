import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  constructor(private http: HttpClient) { }
  getShiftUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=8`
    );
  }
  getShiftIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=8`
    );
  }
  addShift(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=8`,data
    );
  }

  editShift(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=8`,data
    );
  }
  deleteShift(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=8`
    );
  }
}
