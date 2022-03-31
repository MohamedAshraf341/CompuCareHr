import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

 
  constructor(private http: HttpClient) { }
  getJobUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=5`
    );
  }
  getJobIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=5`
    );
  }
  addJob(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=5`,data
    );
  }

  editJob(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=5`,data
    );
  }
  deleteJob(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=5`
    );
  }
}
