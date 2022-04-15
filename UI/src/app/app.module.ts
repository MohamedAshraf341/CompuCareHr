import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSnackBarComponent } from './shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ListworktimeComponent } from './pages/WorkTime/listworktime/listworktime.component';
import { AddOrEditworktimeComponent } from './pages/WorkTime/add-or-editworktime/add-or-editworktime.component';
import { MatTableModule } from '@angular/material/table'  
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { ListtransactionComponent } from './pages/Transaction/listtransaction/listtransaction.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListholidayComponent } from './pages/Transaction/holiday/listholiday/listholiday.component';
import { AddholidayComponent } from './pages/Transaction/holiday/addholiday/addholiday.component';
import { AddpermissionsComponent } from './pages/Transaction/permissions/addpermissions/addpermissions.component';
import { ListpermissionsComponent } from './pages/Transaction/permissions/listpermissions/listpermissions.component';
import { ListerrandsComponent } from './pages/Transaction/errands/listerrands/listerrands.component';
import { AdderrandsComponent } from './pages/Transaction/errands/adderrands/adderrands.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { AddPermissionComponent } from './pages/add-permission/add-permission.component';
import { AddOrEditbusComponent } from './pages/bus/add-or-editbus/add-or-editbus.component';
import { ListbusComponent } from './pages/bus/listbus/listbus.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,

    ListworktimeComponent,
    AddOrEditworktimeComponent,
    ListtransactionComponent,
    ListholidayComponent,
    AddholidayComponent,
    AddpermissionsComponent,
    ListpermissionsComponent,
    ListerrandsComponent,
    AdderrandsComponent,
    PermissionsComponent,
    AddPermissionComponent,
    AddOrEditbusComponent,
    ListbusComponent,
    


 
  ],
  imports: [
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,MatPaginatorModule,
    //default module
    DefaultModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule ,
    MatIconModule
  ],
  
  providers: [MatSnackBarComponent,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
