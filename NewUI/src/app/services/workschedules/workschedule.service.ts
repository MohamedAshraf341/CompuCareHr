import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkscheduleService {

  constructor(private http: HttpClient) { }
  addWorkschedule(data:any)
  {
    return this.http.post(`${environment.apiUrl}Workschedule/NewWorkschedule`,data );
  }
}
