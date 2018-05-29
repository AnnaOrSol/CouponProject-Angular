import { Route } from "@angular/router";
import { LoginComponent } from "../main/login/login.component";
import { AdminMainComponent } from "../admin/admin-main/admin-main.component";

export class ProjectRoutes {
    public static routes: Route[] = [
        {path: "", redirectTo: "/home", pathMatch: "full"},
        {path: "home", component: LoginComponent},
        {path: "admin", component: AdminMainComponent}
    ];

}