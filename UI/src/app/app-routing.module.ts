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
import { PermissionsComponent } from './pages/permissions/permissions.component';
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
import { AddPermissionComponent } from './pages/add-permission/add-permission.component';
import { ListbusComponent } from './pages/bus/listbus/listbus.component';
import { AddOrEditbusComponent } from './pages/bus/add-or-editbus/add-or-editbus.component';
import { ListUserPermissionComponent } from './pages/UserPermission/list-user-permission/list-user-permission.component';
import { AddUserPermissionComponent } from './pages/UserPermission/add-user-permission/add-user-permission.component';
import { EditUserPermissionComponent } from './pages/UserPermission/edit-user-permission/edit-user-permission.component';
const routes: Routes = [
  {path:'',component:LoginComponent},

  {path:'defaultPage',component:DefaultComponent,
  children:
  [
    //permission
    {path:'permission',component:PermissionsComponent},
    {path:'addpermission',component:AddPermissionComponent},
    {path:'listuserpermission/:New/:edit/:delete',component:ListUserPermissionComponent},
    {path: 'adduserpermission',component:AddUserPermissionComponent},
    {path: 'edituserpermission',component:EditUserPermissionComponent},
    {path: 'edituserpermission/:id',component:EditUserPermissionComponent},
    {path: 'adduserpermission/:id',component:AddUserPermissionComponent},

    //
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    //company
    { path: 'companylist/:New/:edit/:delete', component: CompanyListComponent },
    { path: 'addOrEditCompany/:id', component: AddEditCompanyComponent },
    //employee
    { path: 'employeelist/:New/:edit/:delete', component: ListemployeeComponent },
    { path: 'addOrEditemployee', component: AddOrEditEmployeeComponent },
    //empwork
    {path:'worktime/:New/:edit/:delete',component:ListworktimeComponent},
    {path:'addOrEditworktime',component:AddOrEditworktimeComponent},
    //client
    { path: 'clientlist/:New/:edit/:delete', component: ListClientComponent },
    { path: 'addOrEditclient', component: AddOrEditClientComponent },

    //location
    { path: 'locationlist', component: ListlocationComponent },
    //account

    { path: 'accountlist/:New/:edit/:delete', component: ListaccountComponent },
 
    // //branch
    {path:'branchlist/:New/:edit/:delete',component:ListbranchComponent},
    {path:'addOrEditbranch/:id',component:AddOrEditbranchComponent},

        //bus
     {path:'buslist/:New/:edit/:delete',component:ListbusComponent},
    {path:'addOrEditbus/:id',component:AddOrEditbusComponent},


    //department

    {path:'departmentlist/:New/:edit/:delete',component:ListDepartmentComponent},
    {path:'addOrEditdepartment/:id',component:AddOrEditDepartmentComponent},

    
    //cost

    {path:'costlist/:New/:edit/:delete',component:ListcostComponent},
    {path:'addOrEditcost/:id',component:AddOrEditcostComponent},

     //job

     {path:'joblist/:New/:edit/:delete',component:ListjobComponent},
     {path:'addOrEditjob/:id',component:AddOrEditjobComponent},
      //joblevel

    {path:'joblevellist/:New/:edit/:delete',component:ListjobLevelComponent},
    {path:'addOrEditjoblevel/:id',component:AddOrEditjobLevelComponent},
    
     //section

     {path:'sectionlist/:New/:edit/:delete',component:ListsectionComponent},
     {path:'addOrEditsection/:id',component:AddOrEditsectionComponent},


     // PublicHoliday

     {path:'PublicHolidaylist/:New/:edit/:delete',component:PublicHolidayListComponent},
     {path:'addOrEditPublicHoliday/:id',component:AddOrEditPublicHolidayComponent},
         // employee

      {path:'employeelist/:New/:edit/:delete',component:ListemployeeComponent},
      {path:'addOrEditemployee/:id',component:AddOrEditEmployeeComponent},

      //empwork
      {path:'worktime/:New/:edit/:delete',component:ListworktimeComponent},
      {path:'addOrEditworktime/:id',component:AddOrEditworktimeComponent},

      
          // shift

      {path:'shiftlist/:New/:edit/:delete',component:ShiftListComponent},
      {path:'addOrEditshift/:id',component:AddOrEditshiftComponent},
      //report
      {path:'report',component:ReportComponent},
         //Leaves Types
      {path:'leavesTypes',component:LeavesTypesListComponent},
        //Leaves
        {path:'leaves/:New/:edit/:delete',component:LeavesListComponent},
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
        {path:"listtransactionholiday/:New/:edit/:delete",component:ListholidayComponent},
        {path:'addtransactionerrned',component:AdderrandsComponent},
        {path:'addtransactionerrned/:id',component:AdderrandsComponent},
        {path:'listtransactionerrned/:New/:edit/:delete',component:ListerrandsComponent},
        {path:'addtransactionpermission',component:AddpermissionsComponent},
        {path:'addtransactionpermission/:id',component:AddpermissionsComponent},
        {path:'listtransactionpermission/:New/:edit/:delete',component:ListpermissionsComponent}
        
  ]
},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
