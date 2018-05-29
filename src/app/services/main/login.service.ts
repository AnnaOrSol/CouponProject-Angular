import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

public login(user): Observable<any> {
  return this.http.post("http://localhost:8080/CouponsWeb2018/rest/AdminService/login", user, { withCredentials: true });
}

}
