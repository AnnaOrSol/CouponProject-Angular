import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  companies: boolean;
  customers: boolean;

  constructor() { }

  ngOnInit() {
    
  }
}
