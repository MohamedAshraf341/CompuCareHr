import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }
  getBranchesUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=0`
    );
  }
  getBranchesIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=0`
    );
  }
  addBranch(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=0`,data
    );
  }

  editBranch(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=0`,data
    );
  }
  deleteBranch(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=0`
    );
  }
}
