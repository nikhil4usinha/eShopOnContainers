
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router'

import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookACarComponent } from './components/book-a-car/book-a-car.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { DistributorOrdersComponent } from './components/distributor-orders/distributor-orders.component';
import { DistributorOrderStatusComponent } from './components/distributor-order-status/distributor-order-status.component';
import { DealerOrdersComponent } from './components/dealer-orders/dealer-orders.component';
import { DealerOrderStatusComponent } from './components/dealer-order-status/dealer-order-status.component';
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
//import { HomeComponent } from "./components/home/home.component";
//import { CustomersComponent } from "./components/customers/customers.component";
//import { ProductsComponent } from "./components/products/products.component";//
//import { OrdersComponent } from "./components/orders/orders.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "login", component: LoginComponent, data: { title: "Login" } },
            { path: '', component: DashboardComponent, canActivate: [AuthGuard], data: { title: "Dashboard" } },

            { path: "dashboard", canActivate: [AuthGuard], redirectTo: '/', pathMatch: 'full', },
            { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
            { path: "distributor", component: DistributorComponent, data: { title: "distributor" } },
            { path: "distributor-orders", component: DistributorOrdersComponent, data: { title: "distributor-orders" } },
            { path: "distributor-order-status", component: DistributorOrderStatusComponent, data: { title: "distributor-order-status" } },
            { path: "dealer-orders", component: DealerOrdersComponent, data: { title: "dealer-orders" } },
            { path: "dealer-order-status", component: DealerOrderStatusComponent, data: { title: "dealer-order-status" } },
            { path: "book-a-car", component: BookACarComponent, data: { title: "Book a car" } },
            { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
           
            {
                path: '', component: AdminLayoutComponent, children: [
                    {
                        path: '', loadChildren: './components/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
                    }]
            },

            //{ path: "home", redirectTo: "/", pathMatch: "full" },
            //{ path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
            //{ path: "customers", component: CustomersComponent, canActivate: [AuthGuard], data: { title: "Customers" } },
            //{ path: "products", component: ProductsComponent, canActivate: [AuthGuard], data: { title: "Products" } },
            //{ path: "orders", component: OrdersComponent, canActivate: [AuthGuard], data: { title: "Orders" } },

        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class AppRoutingModule { }
