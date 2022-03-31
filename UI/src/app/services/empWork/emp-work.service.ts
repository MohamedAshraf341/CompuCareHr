import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpWorkModel } from '../../models/empWorkModel';


@Injectable({
  providedIn: 'root'
})
export class EmpWorkService {
  constructor(private http :HttpClient) { }

  GetAllEmpWork() {
    return this.http.get(`${environment.apiUrl}EmpWork`);
  }
  
  postNewEmpWork (emp : EmpWorkModel)
  {
    return this.http.post(`${environment.apiUrl}EmpWork/`,emp)
  }

  
  GetEmpWorkById(id: number ) {

    return this.http.get(`${environment.apiUrl}EmpWork/${id}`)
  }

  //Update ....Update Item in Api
  UpdateEmpWork(id: number, emp: EmpWorkModel) {

    return this.http.put(`${environment.apiUrl}EmpWork/${id}`, emp)
  }
  //Delete ....Delete Item from Api
  DeleteEmpWork(id: number) {

    return this.http.delete(`${environment.apiUrl}EmpWork/${id}`);
  }

}