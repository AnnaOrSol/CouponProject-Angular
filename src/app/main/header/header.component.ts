import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserType } from '../../models/userType';
import { LoginInfo } from '../../models/loginInfo';
import { LoginService } from '../../services/main/login.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplicationResponse } from '../../models/applicationReponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInType: UserType;
  user: LoginInfo;
  modalRef: BsModalRef;
  admin: string = UserType.ADMIN;
  company: string = UserType.COMPANY;
  customer: string = UserType.CUSTOMER;
  guest: string =  UserType.GUEST;
  response: ApplicationResponse;

  constructor(private loginService: LoginService, private modalService: BsModalService, private router: Router) {
    this.user = new LoginInfo("", "", UserType.ADMIN);
    this.response = null;
  }

  ngOnInit() {
    this.loginService.getSessionInfo().subscribe(
      (res: UserType) => {
        console.log(res);
        if(res === UserType.ADMIN.toUpperCase())
          this.loggedInType = UserType.ADMIN;
        else if(res === UserType.COMPANY.toUpperCase())
          this.loggedInType = UserType.COMPANY;
        else if(res === UserType.CUSTOMER.toUpperCase())
          this.loggedInType = UserType.CUSTOMER;
        else if(res === UserType.GUEST.toUpperCase())
          this.loggedInType = UserType.GUEST;

        console.log(this.loggedInType);
      }
    );

  }

  public login() {
    this.loginService.login(this.user).subscribe(res => {
      this.response = res;
      if (res.responseCode == 0) {
        this.response.alertType = "danger";
      } else if (res.responseCode == 1) {
        this.response.alertType = "success";
        setTimeout(() => {
          let route: string = "admin";
          if(this.user.userType === UserType.COMPANY) {
            this.loggedInType = UserType.COMPANY;
            route = "company";
          } else if(this.user.userType === UserType.CUSTOMER) {
            this.loggedInType = UserType.CUSTOMER;
            route = "customer";
          }
          this.loggedInType = UserType.ADMIN;
          this.modalRef.hide();
          this.response = null;
          this.user =  new LoginInfo("", "", UserType.ADMIN);
          this.router.navigate([route]);
        }, 500);
      } else {
        this.response.alertType = "warning";
      }

    },
      err => {
        this.response = err.error;
        this.response.alertType = "warning";
      });
  }

  public logout() {
    this.loginService.logout().subscribe(res => {
      this.loggedInType = UserType.GUEST;
    });
  }
  public closeAlert() {
    this.response = null;
  }

  public changeUserType(userType) {
    this.user.userType = userType;
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
