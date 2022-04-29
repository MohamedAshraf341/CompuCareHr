import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicHolidayService {


  constructor(private http: HttpClient) { }
  getPublicHolidayUrl()
  {
    return this.http.get(
      `${environment.apiUrl}Atttables?flag=9`
    );
  }
  getPublicHolidayIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttTables/${Id}?flag=9`
    );
  }
  addPublicHoliday(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Atttables?flag=9`,data
    );
  }

  editPublicHoliday(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}AttTables/${Id}?flag=9`,data
    );
  }
  deletePublicHoliday(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}AttTables/${Id}?flag=9`
    );
  }
}

