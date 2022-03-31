import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {


  constructor(private http: HttpClient) { }
  getSectionUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=7`
    );
  }
  getSectionIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=7`
    );
  }
  addSection(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=7`,data
    );
  }

  editSection(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=7`,data
    );
  }
  deleteSection(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=7`
    );
  }
}
