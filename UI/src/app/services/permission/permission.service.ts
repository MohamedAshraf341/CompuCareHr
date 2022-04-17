import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { usersystempage } from 'src/app/models/usersystempage';
@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }
  getpermission()
  {
    return this.http.get(`${environment.apiUrl}userrole/SystemPage`);
  }
  getpages()
  {
    return this.http.get(`${environment.apiUrl}UserRole/getpages`);
  }
  getusers()
  {
    return this.http.get(`${environment.apiUrl}userrole/getusers`);
  }
  addpermission(data:any)
  {
    return this.http.post(`${environment.apiUrl}userrole/NewUserRole`,data );
  }
  addpermission1(data:any,row:number)
  {
    return this.http.post(`${environment.apiUrl}userrole/NewUserRole/${row}`,data );
  }
  addListpermission(data: usersystempage[]): Observable<usersystempage[]> {
    return forkJoin(
      data.map((user) =>
        this.http.post<usersystempage>(`${environment.apiUrl}userrole/NewUserRole`,data)
      )
    );
  }
}
