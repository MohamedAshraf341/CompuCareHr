import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getEmployeeUrl()
  {
    return this.http.get(
      `${environment.apiUrl}EmpDatas`
    );
  }
  getEmployeeIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}EmpDatas/${Id}`
    );
  }
  addemployee(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}EmpDatas`,data
    );
  }
  editDepartment(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}EmpDatas/${Id}`,data
    );
  }

  deleteEmployee(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}EmpDatas/${Id}`
    );
  }
}
