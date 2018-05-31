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

  user: LoginInfo;
  modalRef: BsModalRef;
  admin: string = UserType.ADMIN;
  company: string = UserType.COMPANY;
  customer: string = UserType.CUSTOMER;
  response: ApplicationResponse;

  constructor(private loginService: LoginService, private modalService: BsModalService, private router: Router) {
    this.user = new LoginInfo("", "", UserType.ADMIN);
    this.response = null;
  }

  ngOnInit() {
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
            route = "company";
          } else if(this.user.userType === UserType.CUSTOMER) {
            route = "customer";
          }
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
