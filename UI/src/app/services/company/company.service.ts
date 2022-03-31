import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompanyUrl()
  {
    return this.http.get(
      `${environment.apiUrl}AttComp/GetCompanies`
    );
  }
  getCompanyIdUrl(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}AttComp/GetCompany/${Id}`
    );
  }
  addCompany(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}Attcomp/AddComany`,data
    );
  }

  editCompany(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}Attcomp/PutCompany/${Id}`,data
    );
  }
  deleteCompany(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}Attcomp/DeleteCpmpany/${Id}`
    );
  }
}
