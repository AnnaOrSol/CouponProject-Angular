import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { LoginService } from './services/main/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectRoutes } from './models/routes';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminService } from './services/admin/admin.service';
import { AdminCompanyTableComponent } from './admin/admin-company-table/admin-company-table.component';
import { AdminCompanyCreateComponent } from './admin/admin-company-create/admin-company-create.component';
import { CredentialsInterceptor } from './interceptors/credentialsInterceptor';
import { AdminCustomerTableComponent } from './admin/admin-customer-table/admin-customer-table.component';
import { AdminCustomerCreateComponent } from './admin/admin-customer-create/admin-customer-create.component';
import { AdminCustomerViewComponent } from './admin/admin-customer-view/admin-customer-view.component';
import { AdminCompanyViewComponent } from './admin/admin-company-view/admin-company-view.component';
import { CompanyMainComponent } from './company/company-main/company-main.component';
import { CompanyCouponTableComponent } from './company/company-coupon-table/company-coupon-table.component';
import { CompanyCouponViewComponent } from './company/company-coupon-view/company-coupon-view.component';
import { CompanyCouponCreateComponent } from './company/company-coupon-create/company-coupon-create.component';
import { CompanyProfileViewComponent } from './company/company-profile-view/company-profile-view.component';
import { KeysPipe } from './pipes/keys.pipe';
import { CompanyService } from './services/company/company.service';
import { JsonDatePipe } from './pipes/json-date.pipe';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminMainComponent,
    AdminCompanyTableComponent,
    AdminCompanyCreateComponent,
    AdminCustomerTableComponent,
    AdminCustomerCreateComponent,
    AdminCustomerViewComponent,
    AdminCompanyViewComponent,
    CompanyMainComponent,
    CompanyCouponTableComponent,
    CompanyCouponViewComponent,
    CompanyCouponCreateComponent,
    CompanyProfileViewComponent,
    KeysPipe,
    JsonDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ProjectRoutes.routes, { useHash: true }),
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [LoginService, AdminService, CompanyService,  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true
    }  ,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
