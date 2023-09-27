import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // create Data
  addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employee',data)
  }

  // get("http") data
  getAllEmployee():Observable<any>{
    return this.http.get('http://localhost:3000/employee')
  }

}
