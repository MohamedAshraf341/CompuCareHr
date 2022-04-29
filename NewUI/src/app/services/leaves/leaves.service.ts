import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

 
  constructor(private http: HttpClient) { }
  getLeavesUrl()
  {
    return this.http.get(
      `${environment.apiUrl}ar/leaves`
    );
  }
  getLeavesIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}ar/leaves/${Id}`
    );
  }
  addLeaves(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}ar/leaves/NewLeaves`,data,  { responseType: 'text' }
    );
  }

  editLeaves(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}ar/leaves/UpdateLeaves/${Id}`,data,  { responseType: 'text' }
    );
  }
  deleteLeaves(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}ar/leaves/DeleteLeaves/${Id}`,  { responseType: 'text' }
    );
  }

}
