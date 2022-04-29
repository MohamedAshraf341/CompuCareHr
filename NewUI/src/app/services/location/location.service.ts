import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}
 
  getLocationUrl() {
    return this.http.get(
      `${environment.apiUrl}EmpWork`

    );
  }
}
