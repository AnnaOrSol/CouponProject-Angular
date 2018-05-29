import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/main/login.service';
import { LoginInfo } from '../../models/loginInfo';
import { UserType } from '../../models/userType';
import { Observable } from 'rxjs/Observable';
import { ApplicationResponse } from '../../models/applicationReponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginInfo;
  admin: string = UserType.ADMIN;
  company: string = UserType.COMPANY;
  customer: string = UserType.CUSTOMER;

  constructor(private loginService:LoginService) {
    this.user = new LoginInfo("", "", UserType.ADMIN);
  }

  public changeUserType(userType){
    this.user.userType = userType;
  }

  ngOnInit() {
  }

/*
function(){}

()=>{}
=>
=>{}

*/

  public login(){
    let obs:Observable<any> = this.loginService.login(this.user);
    obs.subscribe(res => {
      console.log( res);
    });
  }

}
