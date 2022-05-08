import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 
import { PagesComponent } from 'src/app/pages/pages.component';
import { BlankComponent } from 'src/app/pages/blank/blank.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { NotFoundComponent } from 'src/app/pages/errors/not-found/not-found.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
// system component
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


export const routes: Routes = [
  // {path:'',loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '', component: PagesComponent,
    children:[
      // {path:"defaultPage",component:DashboardComponent},
      { path: '', loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' }  },          
      { path: 'membership', loadChildren: () => import('src/app/pages/membership/membership.module').then(m => m.MembershipModule), data: { breadcrumb: 'Membership' } },
      { path: 'ui', loadChildren: () => import('src/app/pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
      { path: 'form-elements', loadChildren: () => import('src/app/pages/form-elements/form-elements.module').then(m => m.FormElementsModule), data: { breadcrumb: 'Form Elements' } },
      { path: 'tables', loadChildren: () => import('src/app/pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
      { path: 'tools', loadChildren: () => import('src/app/pages/tools/tools.module').then(m => m.ToolsModule), data: { breadcrumb: 'Tools' } },
      { path: 'calendar', loadChildren: () => import('src/app/pages/calendar/app-calendar.module').then(m => m.AppCalendarModule), data: { breadcrumb: 'Calendar' } },
      { path: 'mailbox', loadChildren: () => import('src/app/pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
      { path: 'maps', loadChildren: () => import('src/app/pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
      { path: 'charts', loadChildren: () => import('src/app/pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
      { path: 'dynamic-menu', loadChildren: () => import('src/app/pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },  
      { path: 'profile', loadChildren: () => import('src/app/pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' }  },         
      { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
      { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
      //compnay
      {path:'company',component:CompanyListComponent, data: { breadcrumb: 'company' }},
      {path:'addOrEditCompany/:id',component:AddOrEditCompanyComponent, data: { breadcrumb: 'addOrEditCompany' }},
      {path:'addOrEditCompany/:id/:button',component:AddOrEditCompanyComponent, data: { breadcrumb: 'addOrEditCompany' }},
      //branch
      {path:'branch',component:ListbranchComponent, data: { breadcrumb: 'Branch' }},
      {path:'addOrEditbranch/:id',component:AddOrEditbranchComponent, data: { breadcrumb: 'addOrEditbranch' }},
      {path:'addOrEditbranch/:id/:button',component:AddOrEditbranchComponent, data: { breadcrumb: 'addOrEditbranch' }},
      //bus
      {path:'bus',component:ListbusComponent, data: { breadcrumb: 'Branch' }},
      {path:'addOrEditbus/:id',component:AddOrEditbusComponent, data: { breadcrumb: 'addOrEditbus' }},
      {path:'addOrEditbus/:id/:button',component:AddOrEditbusComponent, data: { breadcrumb: 'addOrEditbus' }},
      //department
      {path:'department',component:ListdepartmentComponent, data: { breadcrumb: 'department' }},
      {path:'addOrEditdepartment/:id',component:AddOrdepartmentComponent, data: { breadcrumb: 'addOrEditdepartment' }},
      {path:'addOrEditdepartment/:id/:button',component:AddOrdepartmentComponent, data: { breadcrumb: 'addOrEditdepartment' }},
      //job
      {path:'job',component:ListjobComponent, data: { breadcrumb: 'job' }},
      {path:'addOrEditjob/:id',component:AddOrEditjobComponent, data: { breadcrumb: 'addOrEditjob' }},
      {path:'addOrEditjob/:id/:button',component:AddOrEditjobComponent, data: { breadcrumb: 'addOrEditjob' }},
      //shift
      {path:'shift',component:ListshiftComponent, data: { breadcrumb: 'shift' }},
      {path:'addOrEditshift/:id',component:AddOrEditshiftComponent, data: { breadcrumb: 'addOrEditshift' }},
      {path:'addOrEditshift/:id/:button',component:AddOrEditshiftComponent, data: { breadcrumb: 'addOrEditshift' }},
      //public holiday
      {path:'publicholihday',component:ListpublicholidayComponent, data: { breadcrumb: 'publicholihday' }},
      {path:'addOrEditpublicholihday/:id',component:AddOrEditpublicholidayComponent, data: { breadcrumb: 'addOrEditpublicholihday' }},
      {path:'addOrEditpublicholihday/:id/:button',component:AddOrEditpublicholidayComponent, data: { breadcrumb: 'addOrEditpublicholihday' }},
      //employee
      {path:'employee',component:ListemployeeComponent, data: { breadcrumb: 'employee' }},
      {path:'addOrEditemployee/:id',component:AddOrEditemployeeComponent, data: { breadcrumb: 'addOrEditemployee' }},
      {path:'addOrEditemployee/:id/:button',component:AddOrEditemployeeComponent, data: { breadcrumb: 'addOrEditemployee' }},
      //leaves
      {path:'leaves',component:ListleavesComponent, data: { breadcrumb: 'leaves' }},
      {path:'addOrEditleaves/:id',component:AddOrEditleavesComponent, data: { breadcrumb: 'addOrEditleaves' }},
      {path:'addOrEditleaves/:id/:button',component:AddOrEditleavesComponent, data: { breadcrumb: 'addOrEditleaves' }},
      //worktime
      {path:'worktime',component:ListworktimeComponent, data: { breadcrumb: 'worktime' }},
      {path:'addOrEditworktime/:id',component:AddOrEditworktimeComponent, data: { breadcrumb: 'addOrEditworktime' }},
      {path:'addOrEditworktime/:id/:button',component:AddOrEditworktimeComponent, data: { breadcrumb: 'addOrEditworktime' }},
      //joblevel
      {path:'joblevel',component:ListjoblevelComponent, data: { breadcrumb: 'joblevel' }},
      {path:'addOrEditjoblevel/:id',component:AddOrEditjoblevelComponent, data: { breadcrumb: 'addOrEditjoblevel' }},
      {path:'addOrEditjoblevel/:id/:button',component:AddOrEditjoblevelComponent, data: { breadcrumb: 'addOrEditjoblevel' }},
      //userrole
      {path:'userrole',component:ListuserroleComponent, data: { breadcrumb: 'userrole' }},
      {path:'addOrEdituserrole/:id',component:AddOrEdituserroleComponent, data: { breadcrumb: 'addOrEdituserrole' }},
      {path:'addOrEdituserrole/:id/:button',component:AddOrEdituserroleComponent, data: { breadcrumb: 'addOrEdituserrole' }},
      //errand
      {path:'errand',component:ListerrandComponent, data: { breadcrumb: 'errand' }},
      {path:'addOrEditerrand/:id',component:AddOrEditerrandComponent, data: { breadcrumb: 'addOrEditerrand' }},
      {path:'addOrEditerrand/:id/:button',component:AddOrEditerrandComponent, data: { breadcrumb: 'addOrEditerrand' }},
      //holiday
      {path:'holiday',component:ListholidayComponent, data: { breadcrumb: 'holiday' }},
      {path:'addOrEditholihday/:id',component:AddOrEditholidayComponent, data: { breadcrumb: 'addOrEditholihday' }},
      {path:'addOrEditholihday/:id/:button',component:AddOrEditholidayComponent, data: { breadcrumb: 'addOrEditholihday' }},
      //permission
      {path:'permission',component:ListpermissionComponent, data: { breadcrumb: 'permission' }},
      {path:'addOrEditpermission/:id',component:AddOrEditpermissionComponent, data: { breadcrumb: 'addOrEditpermission' }},
      {path:'addOrEditpermission/:id/:button',component:AddOrEditpermissionComponent, data: { breadcrumb: 'addOrEditpermission' }},



    ]
  },
  { path: 'login', loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule) },
  { path: '**', component: NotFoundComponent }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
      relativeLinkResolution: 'legacy',
      // useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }