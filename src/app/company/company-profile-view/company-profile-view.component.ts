import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/main/login.service';
import { Company } from '../../models/company';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-company-profile-view',
  templateUrl: './company-profile-view.component.html',
  styleUrls: ['./company-profile-view.component.css']
})
export class CompanyProfileViewComponent implements OnInit {

  company: Company;
  @Input() modalRef: BsModalRef;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getCompanyInformation().subscribe(res => this.company = res);
  }

}
