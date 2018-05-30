
import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PopoverModule } from "ngx-bootstrap/popover";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { EndpointFactory } from './services/endpoint-factory.service';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from "./components/app.component";
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { HomeComponent } from "./components/home/home.component";
//import { CustomersComponent } from "./components/customers/customers.component";
//import { ProductsComponent } from "./components/products/products.component";
//import { OrdersComponent } from "./components/orders/orders.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DistributorComponent } from "./components/distributor/distributor.component";
import { DistributorOrdersComponent } from "./components/distributor-orders/distributor-orders.component";
import { DistributorOrderStatusComponent } from "./components/distributor-order-status/distributor-order-status.component";
import { DealerOrdersComponent } from "./components/dealer-orders/dealer-orders.component";
import { DealerOrderStatusComponent } from "./components/dealer-order-status/dealer-order-status.component";

import { BookACarComponent } from "./components/book-a-car/book-a-car.component";
import { TodoDemoComponent } from "./components/controls/todo-demo.component";
import { StatisticsDemoComponent } from "./components/controls/statistics-demo.component";
import { NotificationsViewerComponent } from "./components/controls/notifications-viewer.component";
import { SearchBoxComponent } from "./components/controls/search-box.component";
import { UserInfoComponent } from "./components/controls/user-info.component";
import { UserPreferencesComponent } from "./components/controls/user-preferences.component";
import { UsersManagementComponent } from "./components/controls/users-management.component";
import { RolesManagementComponent } from "./components/controls/roles-management.component";
import { RoleEditorComponent } from "./components/controls/role-editor.component";
import { BuyerOrdersComponent } from "./components/buyer-orders/buyer-orders.component";

import {
    AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';

//import { UserProfileComponent } from './components/user-profile/user-profile.component';
//import { TableListComponent } from './components/table-list/table-list.component';
//import { TypographyComponent } from './components/typography/typography.component';
//import { IconsComponent } from './components/icons/icons.component';
//import { MapsComponent } from './components/maps/maps.component';
//import { NotificationsComponent } from './components/notifications/notifications.component';
//import { UpgradeComponent } from './components/upgrade/upgrade.component';





@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ComponentsModule,
        AppRoutingModule,
        CommonModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslateLanguageLoader
            }
        }),
        NgxDatatableModule,
        ToastyModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
        ],
    declarations: [
        AppComponent,
        LoginComponent,
        //HomeComponent,
        DashboardComponent,
        AdminLayoutComponent,
        //CustomersComponent,
        //ProductsComponent,
        //OrdersComponent,
        SettingsComponent,
        UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
        RolesManagementComponent, RoleEditorComponent,
        NotFoundComponent,
        BookACarComponent,
        DistributorComponent,
        DistributorOrdersComponent,
        DistributorOrderStatusComponent,
        DealerOrdersComponent,
        DealerOrderStatusComponent,
        AdminLayoutComponent,
        NotificationsViewerComponent,
        SearchBoxComponent,
        StatisticsDemoComponent, TodoDemoComponent,
        EqualValidator,
        LastElementDirective,
        AutofocusDirective,
        BootstrapTabDirective,
        BootstrapToggleDirective,
        BootstrapSelectDirective,
        BootstrapDatepickerDirective,
        GroupByPipe
    ],
    exports: [
        DashboardComponent
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AlertService,
        ConfigurationService,
        AppTitleService,
        AppTranslationService,
        NotificationService,
        NotificationEndpoint,
        AccountService,
        AccountEndpoint,
        LocalStoreManager,
        EndpointFactory
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}




export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
