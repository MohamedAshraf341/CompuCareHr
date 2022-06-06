import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

//angular material
import {ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
export function HttpLoaderFactory(httpClient: HttpClient) { 
  return new TranslateHttpLoader(httpClient, 'src/app/assets/i18n/', '.json');
}

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; 

import { ToastrModule } from 'ngx-toastr';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';

import { AppRoutingModule } from 'src/app/app.routing';
import { AppSettings } from 'src/app/app.settings';

import { AppComponent } from 'src/app/app.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { HeaderComponent } from 'src/app/theme/components/header/header.component';
import { FooterComponent } from 'src/app/theme/components/footer/footer.component';
import { SidebarComponent } from 'src/app/theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from 'src/app/theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from 'src/app/theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from 'src/app/theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from 'src/app/theme/components/back-top/back-top.component';
import { FullScreenComponent } from 'src/app/theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from 'src/app/theme/components/applications/applications.component';
import { MessagesComponent } from 'src/app/theme/components/messages/messages.component';
import { UserMenuComponent } from 'src/app/theme/components/user-menu/user-menu.component';
import { FlagsMenuComponent } from 'src/app/theme/components/flags-menu/flags-menu.component';
import { SideChatComponent } from 'src/app/theme/components/side-chat/side-chat.component';
import { FavoritesComponent } from 'src/app/theme/components/favorites/favorites.component';
import { BlankComponent } from 'src/app/pages/blank/blank.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { NotFoundComponent } from 'src/app/pages/errors/not-found/not-found.component';


import { ConfirmDeleteComponent } from 'src/app/pages/dialog/confirm-delete/confirm-delete.component';
import { MatSnackBarComponent } from 'src/app/pages/dialog/mat-snack-bar/mat-snack-bar.component';

import { CompanyListComponent } from 'src/app/system/company/company-list/company-list.component'; 
import { AddOrEditCompanyComponent } from 'src/app/system/company/add-or-edit-company/add-or-edit-company.component';
import { AddOrEditbranchComponent } from 'src/app/system/branch/add-or-editbranch/add-or-editbranch.component';
import { ListbranchComponent } from 'src/app/system/branch/listbranch/listbranch.component';
import { ListbusComponent } from 'src/app/system/bus/listbus/listbus.component';
import { AddOrEditbusComponent } from 'src/app/system/bus/add-or-editbus/add-or-editbus.component';
import { AddOrdepartmentComponent } from 'src/app/system/department/add-ordepartment/add-ordepartment.component';
import { ListdepartmentComponent } from 'src/app/system/department/listdepartment/listdepartment.component';
import { ListjobComponent } from 'src/app/system/job/listjob/listjob.component';
import { AddOrEditjobComponent } from 'src/app/system/job/add-or-editjob/add-or-editjob.component';
import { AddOrEditshiftComponent } from 'src/app/system/shift/add-or-editshift/add-or-editshift.component';
import { ListshiftComponent } from 'src/app/system/shift/listshift/listshift.component';
import { ListpublicholidayComponent } from 'src/app/system/public holiday/listpublicholiday/listpublicholiday.component';
import { AddOrEditpublicholidayComponent } from 'src/app/system/public holiday/add-or-editpublicholiday/add-or-editpublicholiday.component';
import { AddOrEditemployeeComponent } from 'src/app/system/employee/add-or-editemployee/add-or-editemployee.component';
import { ListemployeeComponent } from 'src/app/system/employee/listemployee/listemployee.component';
import { ListleavesComponent } from 'src/app/system/leaves/listleaves/listleaves.component';
import { AddOrEditleavesComponent } from 'src/app/system/leaves/add-or-editleaves/add-or-editleaves.component';
import { AddOrEditworktimeComponent } from 'src/app/system/WorkTime/add-or-editworktime/add-or-editworktime.component';
import { ListworktimeComponent } from 'src/app/system/WorkTime/listworktime/listworktime.component';
import { ListjoblevelComponent } from 'src/app/system/JobLevel/listjoblevel/listjoblevel.component';
import { AddOrEditjoblevelComponent } from 'src/app/system/JobLevel/add-or-editjoblevel/add-or-editjoblevel.component';
import { AddOrEdituserroleComponent } from 'src/app/system/UserRole/add-or-edituserrole/add-or-edituserrole.component';
import { ListuserroleComponent } from 'src/app/system/UserRole/listuserrole/listuserrole.component';
import { AddOrEditerrandComponent } from 'src/app/system/TransactionErrand/add-or-editerrand/add-or-editerrand.component';
import { ListerrandComponent } from 'src/app/system/TransactionErrand/listerrand/listerrand.component';
import { ListholidayComponent } from 'src/app/system/TransactionHoliday/listholiday/listholiday.component';
import { AddOrEditholidayComponent } from 'src/app/system/TransactionHoliday/add-or-editholiday/add-or-editholiday.component';
import { ListpermissionComponent } from 'src/app/system/TransactionPermission/listpermission/listpermission.component';
import { AddOrEditpermissionComponent } from 'src/app/system/TransactionPermission/add-or-editpermission/add-or-editpermission.component';
import { ReportComponent } from 'src/app/system/report/report.component';


 

@NgModule({  
  imports: [
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PerfectScrollbarModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    MatSnackBarModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ToastrModule.forRoot(), 
    PipesModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [

    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FlagsMenuComponent,
    SideChatComponent,
    FavoritesComponent,
    BlankComponent,
    SearchComponent,
    NotFoundComponent,
    CompanyListComponent,
    AddOrEditCompanyComponent,
    ConfirmDeleteComponent,
    MatSnackBarComponent,
    AddOrEditbranchComponent,
    ListbranchComponent,
    ListbusComponent,
    AddOrEditbusComponent,
    AddOrdepartmentComponent,
    ListdepartmentComponent,
    ListjobComponent,
    AddOrEditjobComponent,
    AddOrEditshiftComponent,
    ListshiftComponent,
    ListpublicholidayComponent,
    AddOrEditpublicholidayComponent,
    AddOrEditemployeeComponent,
    ListemployeeComponent,
    ListleavesComponent,
    AddOrEditleavesComponent,
    AddOrEditworktimeComponent,
    ListworktimeComponent,
    ListjoblevelComponent,
    AddOrEditjoblevelComponent,
    AddOrEdituserroleComponent,
    ListuserroleComponent,
    AddOrEditerrandComponent,
    ListerrandComponent,
    ListholidayComponent,
    AddOrEditholidayComponent,
    ListpermissionComponent,
    AddOrEditpermissionComponent,
    ReportComponent,
  ],
  entryComponents: [
    ConfirmDeleteComponent
  ],
  exports:[
    MatSnackBarComponent,
    ConfirmDeleteComponent
  ],
  providers: [ 
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 