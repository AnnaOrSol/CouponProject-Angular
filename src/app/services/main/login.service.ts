import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginInfo } from '../../models/loginInfo';
import { UserType } from '../../models/userType';

@Injectable()
export class LoginService {


  private _URL: string = "http://localhost:8080/CouponsWeb2018/rest/";

  constructor(private http: HttpClient) { }

  public login(user: LoginInfo): Observable<any> {
    console.log(user);
    let service: string = "AdminService";
    if (user.userType === UserType.COMPANY)
      service = "CompanyService";
    else if (user.userType === UserType.CUSTOMER)
      service = "CustomerService";
    
    return this.http.post(this._URL + service + "/login", user);
  }

  public logout(): Observable<any> {
    return this.http.get(this._URL + "SessionService/logout");
  }

  public getSessionInfo(): Observable<any> {
    return this.http.get(this._URL + "SessionService/CheckSession");
  }

}
