import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getReportName()
  {
    return this.http.get(
      `${environment.apiUrl}attrepot/1`
    );
  }
  getReportDepartment()
  {
    return this.http.get(
      `${environment.apiUrl}attrepot/2`
    );
  }
  getReportTimeTable()
  {
    return this.http.get(
      `${environment.apiUrl}attrepot/3`
    );
  }
  getLeaves()
  {
    return this.http.get(
      `${environment.apiUrl}attrepot/4`
    );
  }
  filterReport(userid:number,reportid:number,data:any)
  {
    return this.http.get(
      `${environment.apiUrl}attrepot/${userid}/${reportid}?${data}`
    );
 
  }
}
