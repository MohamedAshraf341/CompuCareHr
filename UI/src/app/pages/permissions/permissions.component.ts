import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
import { pages } from 'src/app/models/pages';
import { usersystempage } from 'src/app/models/usersystempage';
import { ItemStatus } from 'src/app/models/ItemStatus';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})

export class PermissionsComponent implements OnInit {
  permissionForm!: FormGroup;
  permissionArr: any = [];
  employees: employee[] = [];
  pages: pages[] = [];
  items: ItemStatus[] = [];
  userpage :usersystempage[]=[];

  dataSource!: MatTableDataSource<usersystempage>;
  colums: string[] = [ "select","PaageName", "New", "edit", "delete"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private employeeService: EmployeeService,
    private Permission: PermissionService,
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog, private _formBuilder: FormBuilder) {
    this.permissionForm = this._formBuilder.group({
      userid: [this.permissionArr.userid, [Validators.required]],
      pageId: [this.permissionArr.pageId, []],
      New: [this.permissionArr.New, []],
      edit: [this.permissionArr.edit, []],
      delete: [this.permissionArr.delete, []],

    });

  }
  get userid() {
    return this.permissionForm.get('userid');
  }
  get pageId() {
    return this.permissionForm.get('pageId');
  }
  get New() {
    return this.permissionForm.get('New');
  }
  get edit() {
    return this.permissionForm.get('edit');
  }
  get delete() {
    return this.permissionForm.get('delete');
  }

  ngOnInit(): void {
    this.getpages();
    this.getListOfemployees();
// console.log("faisal");
// console.log(this.userpage);


  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });

  
  }


  getpages() {


    this.Permission.getpermission().subscribe((res: any) => {
      this.userpage = res;
      this.dataSource = new MatTableDataSource(this.userpage);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
       


     // console.log(this.pages);
    });


  }
  changeChkState(elment:number,id:number) {
    this.userpage.forEach(chk => {
      if (elment === chk.pageId && id === 1 ) 
        chk.New =!chk.New;
        if (elment === chk.pageId && id === 2 ) 
        chk.edit =!chk.edit;
        if (elment === chk.pageId && id === 3 ) 
        chk.delete =!chk.delete;
        // if (elment === chk.pageId && id === 4 ) 
        // chk.Login =!chk.Login;

      
    });
  }

  createpermission() {
    console.log("faisal");
    console.log(this.userpage);
    this.userpage.forEach(chk => {
      chk.UserId =this.userid.value;
      this.Permission.addpermission(chk).subscribe((res: any) => {
          if (res != null) {
            this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
            this.router.navigate(['/defaultPage/permission'])
          }
          else {
            this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
          }
    
    
    })})
  

  }
  clear() {
    this.permissionForm.reset();
  }

}
