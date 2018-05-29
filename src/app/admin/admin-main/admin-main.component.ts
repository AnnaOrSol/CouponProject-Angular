import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  companies:Company[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(res => {this.companies = res;});
  }

  companyCreate(company) {
    this.adminService.createCompany(company).subscribe(res => {
      console.log(res);
    });
  }
}
