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
    AdminCustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ProjectRoutes.routes, { useHash: true }),
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [LoginService, AdminService,  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
