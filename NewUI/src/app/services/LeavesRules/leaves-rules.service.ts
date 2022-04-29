import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeavesRulesService {
  constructor(private http: HttpClient) { }
  getLeavesRules()
  {
    return this.http.get(
      `${environment.apiUrl}LeavesRules`
    );
  }
  getLeavesRulesIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}LeavesRules/${Id}`
    );
  }
}
