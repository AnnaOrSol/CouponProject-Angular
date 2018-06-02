import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-admin-income-table',
  templateUrl: './admin-income-table.component.html',
  styleUrls: ['./admin-income-table.component.css']
})
export class AdminIncomeTableComponent implements OnInit {

  incomes: any[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.viewAllIncome().subscribe(
      res => {
        if (res instanceof Array) {
          this.incomes = this.fixArray(res);
        }
      }
    );
  }
  public fixArray(array) {
    array.forEach(incomeElement => {
      incomeElement.color = "#f9e2cc;"
      incomeElement.date = JSON.stringify(incomeElement.date).slice(0, (JSON.stringify(incomeElement.date).length - 6)) + '"';
      var date: Date = new Date(JSON.parse(incomeElement.date));
      incomeElement.date = date.toDateString();
    });
    return array;
  }
}
