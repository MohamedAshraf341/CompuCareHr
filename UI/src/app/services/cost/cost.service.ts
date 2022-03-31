import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CostService {

 
  constructor(private http: HttpClient) { }
  getCostUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=3`
    );
  }
  getCostIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=3`
    );
  }
  addCost(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=3`,data
    );
  }

  editCost(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=3`,data
    );
  }
  deleteCost(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=3`
    );
  }
}
