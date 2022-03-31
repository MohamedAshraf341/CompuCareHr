import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { AppRoutingModule } from 'src/app/app-routing.module';

//shared module
import { SharedModule } from 'src/app/shared/shared.module';

import {ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

//angular material
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



//Component
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CompanyListComponent } from 'src/app/pages/company/company-list/company-list.component';
import { AddEditCompanyComponent } from 'src/app/pages/company/add-edit-company/add-edit-company.component';
import { ListemployeeComponent } from 'src/app/pages/employee/listemployee/listemployee.component';
import { AddOrEditEmployeeComponent } from 'src/app/pages/employee/add-or-edit-employee/add-or-edit-employee.component';
import { AddOrEditClientComponent } from 'src/app/pages/client/add-or-edit-client/add-or-edit-client.component';
import { ListClientComponent } from 'src/app/pages/client/list-client/list-client.component';
import { ListaccountComponent } from 'src/app/pages/account/listaccount/listaccount.component';
import { ListlocationComponent } from 'src/app/pages/location/listlocation/listlocation.component';
import { ListbranchComponent } from 'src/app/pages/Branch/listbranch/listbranch.component';

import { ListcostComponent } from 'src/app/pages/cost/listcost/listcost.component';
import { ListDepartmentComponent } from 'src/app/pages/department/list-department/list-department.component';
import { AddOrEditcostComponent } from 'src/app/pages/cost/add-or-editcost/add-or-editcost.component';
import { AddOrEditDepartmentComponent } from 'src/app/pages/department/add-or-edit-department/add-or-edit-department.component';
import { ListsectionComponent } from 'src/app/pages/section/listsection/listsection.component';
import { AddOrEditjobLevelComponent } from 'src/app/pages/jobLevel/add-or-editjob-level/add-or-editjob-level.component';
import { AddOrEditjobComponent } from 'src/app/pages/job/add-or-editjob/add-or-editjob.component';
import { ListjobComponent } from 'src/app/pages/job/listjob/listjob.component';
import { ListjobLevelComponent } from 'src/app/pages/jobLevel/listjob-level/listjob-level.component';
import { AddOrEditsectionComponent } from 'src/app/pages/section/add-or-editsection/add-or-editsection.component';
import { AddOrEditPublicHolidayComponent } from 'src/app/pages/PublicHoliday/add-or-edit-public-holiday/add-or-edit-public-holiday.component';
import { PublicHolidayListComponent } from 'src/app/pages/PublicHoliday/public-holiday-list/public-holiday-list.component';
import { ShiftListComponent } from 'src/app/pages/shift/shift-list/shift-list.component';
import { AddOrEditshiftComponent } from 'src/app/pages/shift/add-or-editshift/add-or-editshift.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ReportComponent } from 'src/app/pages/Reports/report/report.component';
import { LeavesTypesListComponent } from 'src/app/pages/leavesTypes/leaves-types-list/leaves-types-list.component';
import { LeavesListComponent } from 'src/app/pages/leaves/leaves-list/leaves-list.component';
import { AddOrEditleavesComponent } from 'src/app/pages/leaves/add-or-editleaves/add-or-editleaves.component';
import { AddOrEditbranchComponent } from 'src/app/pages/Branch/add-or-editbranch/add-or-editbranch.component';
import { ListbusComponent } from 'src/app/pages/Bus/listbus/listbus.component';
import { AddOrEditbusComponent } from 'src/app/pages/Bus/add-or-editbus/add-or-editbus.component';
import { LeavesRulesListComponent } from 'src/app/pages/LeavesRule/leaves-rules-list/leaves-rules-list.component';
import { LeavesVacsListComponent } from 'src/app/pages/LeavesVacs/leaves-vacs-list/leaves-vacs-list.component';
import { AddTransactionComponent } from 'src/app/pages/Transaction/add-transaction/add-transaction.component';


@NgModule({
  declarations: [ 
    DefaultComponent,
    HomeComponent,
    DashboardComponent,
    CompanyListComponent,
    AddEditCompanyComponent,
    ListemployeeComponent,
    AddOrEditEmployeeComponent,
    AddOrEditClientComponent,
    ListClientComponent,
    ListaccountComponent,
    ListlocationComponent,

    
    ListbusComponent,
    AddOrEditbusComponent,
    AddOrEditcostComponent,
    ListcostComponent,
    ListDepartmentComponent,
    AddOrEditDepartmentComponent,
    ListjobComponent,
    AddOrEditjobComponent,
    ListjobLevelComponent,
    AddOrEditjobLevelComponent,
    AddOrEditsectionComponent,
    ListsectionComponent,
    AddOrEditPublicHolidayComponent,
    PublicHolidayListComponent,
    ShiftListComponent,
    AddOrEditshiftComponent,
    ReportComponent,
    LeavesTypesListComponent,
    LeavesListComponent,
    AddOrEditleavesComponent,
    ListbranchComponent,
    AddOrEditbranchComponent,
    AddOrEditbusComponent,
    ListbusComponent,
    LeavesRulesListComponent,
    LeavesVacsListComponent,
    AddTransactionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //shared module
    SharedModule,
    
    //flex layout
    FlexLayoutModule,
   // * MATERIAL IMPORTS
   MatSidenavModule,
   MatToolbarModule,
   MatMenuModule,
   MatIconModule,
   MatDividerModule,
   MatListModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatInputModule,
   MatFormFieldModule,
   MatTooltipModule,
   MatButtonModule,
   MatCardModule,
   MatGridListModule,
   MatCheckboxModule,
   MatDatepickerModule,
   MatRadioModule,
   MatSelectModule,
   MatSnackBarModule,
   MatNativeDateModule,
   MaterialFileInputModule,
  ]
})
export class DefaultModule { }
