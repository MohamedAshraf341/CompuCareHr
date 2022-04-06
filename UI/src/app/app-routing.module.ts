import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaccountComponent } from './pages/account/listaccount/listaccount.component';
import { AddOrEditbranchComponent } from './pages/Branch/add-or-editbranch/add-or-editbranch.component';
import { ListbranchComponent } from './pages/Branch/listbranch/listbranch.component';
import { AddOrEditbusComponent } from './pages/Bus/add-or-editbus/add-or-editbus.component';
import { ListbusComponent } from './pages/Bus/listbus/listbus.component';

import { ListworktimeComponent } from './pages/WorkTime/listworktime/listworktime.component';
import { AddOrEditworktimeComponent } from './pages/WorkTime/add-or-editworktime/add-or-editworktime.component';


import { AddOrEditClientComponent } from './pages/client/add-or-edit-client/add-or-edit-client.component';
import { ListClientComponent } from './pages/client/list-client/list-client.component';
import { AddEditCompanyComponent } from './pages/company/add-edit-company/add-edit-company.component';
import { CompanyListComponent } from './pages/company/company-list/company-list.component';
import { AddOrEditcostComponent } from './pages/cost/add-or-editcost/add-or-editcost.component';
import { ListcostComponent } from './pages/cost/listcost/listcost.component';
import { AddOrEditDepartmentComponent } from './pages/department/add-or-edit-department/add-or-edit-department.component';
import { ListDepartmentComponent } from './pages/department/list-department/list-department.component';
import { AddOrEditEmployeeComponent } from './pages/employee/add-or-edit-employee/add-or-edit-employee.component';
import { ListemployeeComponent } from './pages/employee/listemployee/listemployee.component';
import { AddOrEditjobComponent } from './pages/job/add-or-editjob/add-or-editjob.component';
import { ListjobComponent } from './pages/job/listjob/listjob.component';
import { AddOrEditjobLevelComponent } from './pages/jobLevel/add-or-editjob-level/add-or-editjob-level.component';
import { ListjobLevelComponent } from './pages/jobLevel/listjob-level/listjob-level.component';
import { AddOrEditleavesComponent } from './pages/leaves/add-or-editleaves/add-or-editleaves.component';
import { LeavesListComponent } from './pages/leaves/leaves-list/leaves-list.component';
import { LeavesRulesListComponent } from './pages/LeavesRule/leaves-rules-list/leaves-rules-list.component';
import { LeavesTypesListComponent } from './pages/leavesTypes/leaves-types-list/leaves-types-list.component';
import { LeavesVacsListComponent } from './pages/LeavesVacs/leaves-vacs-list/leaves-vacs-list.component';
import { ListlocationComponent } from './pages/location/listlocation/listlocation.component';
import { AddOrEditPublicHolidayComponent } from './pages/PublicHoliday/add-or-edit-public-holiday/add-or-edit-public-holiday.component';
import { PublicHolidayListComponent } from './pages/PublicHoliday/public-holiday-list/public-holiday-list.component';
import { ReportComponent } from './pages/Reports/report/report.component';
import { AddOrEditsectionComponent } from './pages/section/add-or-editsection/add-or-editsection.component';
import { ListsectionComponent } from './pages/section/listsection/listsection.component';
import { AddOrEditshiftComponent } from './pages/shift/add-or-editshift/add-or-editshift.component';
import { ShiftListComponent } from './pages/shift/shift-list/shift-list.component';
import { AddTransactionComponent } from './pages/Transaction/add-transaction/add-transaction.component';
import { ListtransactionComponent } from './pages/Transaction/listtransaction/listtransaction.component';
import { AddholidayComponent } from './pages/Transaction/holiday/addholiday/addholiday.component';
import { ListholidayComponent } from './pages/Transaction/holiday/listholiday/listholiday.component';
import { AddpermissionsComponent } from './pages/Transaction/permissions/addpermissions/addpermissions.component';
import { ListpermissionsComponent } from './pages/Transaction/permissions/listpermissions/listpermissions.component';
import { AdderrandsComponent } from './pages/Transaction/errands/adderrands/adderrands.component';
import { ListerrandsComponent } from './pages/Transaction/errands/listerrands/listerrands.component';

const routes: Routes = [
  {path:'',component:LoginComponent},

  {path:'defaultPage',component:DefaultComponent,
  children:
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    //company
    { path: 'companylist', component: CompanyListComponent },
    { path: 'addOrEditCompany/:id', component: AddEditCompanyComponent },
    //employee
    { path: 'employeelist', component: ListemployeeComponent },
    { path: 'addOrEditemployee', component: AddOrEditEmployeeComponent },
    //empwork
    {path:'worktime',component:ListworktimeComponent},
    {path:'addOrEditworktime',component:AddOrEditworktimeComponent},
    //client
    { path: 'clientlist', component: ListClientComponent },
    { path: 'addOrEditclient', component: AddOrEditClientComponent },

    //location
    { path: 'locationlist', component: ListlocationComponent },
    //account

    { path: 'accountlist', component: ListaccountComponent },
 
    // //branch
    {path:'branchlist',component:ListbranchComponent},
    {path:'addOrEditbranch/:id',component:AddOrEditbranchComponent},

        //bus
     {path:'buslist',component:ListbusComponent},
    {path:'addOrEditbus/:id',component:AddOrEditbusComponent},


    //department

    {path:'departmentlist',component:ListDepartmentComponent},
    {path:'addOrEditdepartment/:id',component:AddOrEditDepartmentComponent},

    
    //cost

    {path:'costlist',component:ListcostComponent},
    {path:'addOrEditcost/:id',component:AddOrEditcostComponent},

     //job

     {path:'joblist',component:ListjobComponent},
     {path:'addOrEditjob/:id',component:AddOrEditjobComponent},
      //joblevel

    {path:'joblevellist',component:ListjobLevelComponent},
    {path:'addOrEditjoblevel/:id',component:AddOrEditjobLevelComponent},
    
     //section

     {path:'sectionlist',component:ListsectionComponent},
     {path:'addOrEditsection/:id',component:AddOrEditsectionComponent},


     // PublicHoliday

     {path:'PublicHolidaylist',component:PublicHolidayListComponent},
     {path:'addOrEditPublicHoliday/:id',component:AddOrEditPublicHolidayComponent},
         // employee

      {path:'employeelist',component:ListemployeeComponent},
      {path:'addOrEditemployee/:id',component:AddOrEditEmployeeComponent},

      //empwork
      {path:'worktime',component:ListworktimeComponent},
      {path:'addOrEditworktime/:id',component:AddOrEditworktimeComponent},

      
          // shift

      {path:'shiftlist',component:ShiftListComponent},
      {path:'addOrEditshift/:id',component:AddOrEditshiftComponent},
      //report
      {path:'report',component:ReportComponent},
         //Leaves Types
      {path:'leavesTypes',component:LeavesTypesListComponent},
        //Leaves
        {path:'leaves',component:LeavesListComponent},
        {path:'addOrEditLeaves/:id',component:AddOrEditleavesComponent},
              /// leaves rules

        {path:'leavesRules',component:LeavesRulesListComponent},
        // leaves vacations
        {path:'leavesvacations',component:LeavesVacsListComponent},

        // add transactions
        {path:'addtransactions',component:AddTransactionComponent},
        {path:'addtransactions/:id',component:AddTransactionComponent},
        {path:'Listtransaction',component:ListtransactionComponent},
        {path:'Listtransaction/:id',component:ListtransactionComponent},
        //transaction
        {path:'addtransactionholiday',component:AddholidayComponent},
        {path:'addtransactionholiday/:id',component:AddholidayComponent},
        {path:"listtransactionholiday",component:ListholidayComponent},
        {path:'addtransactionerrned',component:AdderrandsComponent},
        {path:'addtransactionerrned/:id',component:AdderrandsComponent},
        {path:'listtransactionerrned',component:ListerrandsComponent},
        {path:'addtransactionpermission',component:AddpermissionsComponent},
        {path:'addtransactionpermission/:id',component:AddpermissionsComponent},
        {path:'listtransactionpermission',component:ListpermissionsComponent}


        
  ]
},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
