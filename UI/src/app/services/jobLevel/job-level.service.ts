import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobLevelService {

  constructor(private http: HttpClient) { }
  getJobLevelUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=6`
    );
  }
  getJobLevelIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=6`
    );
  }
  addJobLevel(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=6`,data
    );
  }

  editJobLevel(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=6`,data
    );
  }
  deleteJobLevel(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=6`
    );
  }
}
