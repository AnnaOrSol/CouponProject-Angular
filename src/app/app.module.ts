import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { LoginService } from './services/main/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectRoutes } from './models/routes';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AdminService } from './services/admin/admin.service';
import { AdminCompanyTableComponent } from './admin/admin-company-table/admin-company-table.component';
import { AdminCompanyCreateComponent } from './admin/admin-company-create/admin-company-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminMainComponent,
    AdminCompanyTableComponent,
    AdminCompanyCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ProjectRoutes.routes, { useHash: true }),
    NgbModule.forRoot()
  ],
  providers: [LoginService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
