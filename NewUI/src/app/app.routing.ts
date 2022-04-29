import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 
import { PagesComponent } from 'src/app/pages/pages.component';
import { BlankComponent } from 'src/app/pages/blank/blank.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { NotFoundComponent } from 'src/app/pages/errors/not-found/not-found.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
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