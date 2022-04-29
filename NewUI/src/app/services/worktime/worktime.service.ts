import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WorktimeService {

  constructor(private http: HttpClient) { }
  GetAllEmpWork()
  {
    return this.http.get(
      `${environment.apiUrl}EmpWork`
    );
  }
  GetEmpWorkById(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}EmpWork/${Id}`
    );
  }
  postNewEmpWork(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}EmpWork/`,data
    );
  }

  UpdateEmpWork(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}EmpWork/${Id}`,data
    );
  }
  DeleteEmpWork(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}EmpWork/${Id}`
    );
  }

}
