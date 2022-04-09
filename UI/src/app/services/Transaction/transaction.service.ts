import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  gettransactionbyiud(id:number)
  {
    return this.http.get(`${environment.apiUrl}en/Transactions/GetTransaction/${id}`);
  }
  
  addTransaction(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}en/Transactions/PostTransaction`,data
      // ,  { responseType: 'text' }
    );
  }
  updateTransaction(Id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}en/Transactions/PutTransaction/${Id}`,data
      // ,  { responseType: 'text' }
    );
  }
  deleteTransaction(Id:Number)
  {
    console.log(Id);
    return this.http.delete(`${environment.apiUrl}en/Transactions/Delete/${Id}`);
  }
  getallholiday()
  {
    return this.http.get(`${environment.apiUrl}en/leaves/1/2022`);
  }
  getallerrands()
  {
    return this.http.get(`${environment.apiUrl}en/leaves/2/2022`);
  }
  getallpermissions()
  {
    return this.http.get(`${environment.apiUrl}en/leaves/3/2022`);
  }
}
