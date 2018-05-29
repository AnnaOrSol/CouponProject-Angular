import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-admin-company-table',
  templateUrl: './admin-company-table.component.html',
  styleUrls: ['./admin-company-table.component.css']
})
export class AdminCompanyTableComponent implements OnInit {

  @Input() companies: Company[];

  constructor() { }

  ngOnInit() {
  }

}
