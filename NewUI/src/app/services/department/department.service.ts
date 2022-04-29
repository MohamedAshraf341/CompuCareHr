import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  getDepartmentUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=4`
    );
  }
  getDepartmentIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=4`
    );
  }
  addDepartment(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=4`,data
    );
  }

  editDepartment(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=4`,data
    );
  }
  deleteDepartment(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=4`
    );
  }
}
