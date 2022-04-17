import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { usersystempage } from 'src/app/models/usersystempage';


@Component({
  selector: 'app-edit-user-permission',
  templateUrl: './edit-user-permission.component.html',
  styleUrls: ['./edit-user-permission.component.css']
})
export class EditUserPermissionComponent implements OnInit {

  permissionForm!: FormGroup;
  userpermissionId: any;
  permissionArr: any = [];
  userpage: usersystempage[]=[];

  dataSource!: MatTableDataSource<any>;
  colums: string[] = [ "select","PaageName", "New", "edit", "delete","login"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private employeeService: EmployeeService,
    private Permission: PermissionService,
    private router: Router,
    private snackBar: MatSnackBarComponent,
     private _formBuilder: FormBuilder,
     private activateRout: ActivatedRoute,
      ) {
    this.permissionForm = this._formBuilder.group({
      username: [this.permissionArr.username, [Validators.required]],
      Password: [this.permissionArr.Password, [Validators.required]],
      password2: [this.permissionArr.Password, [Validators.required]],
      pageId: [this.permissionArr.pageId, []],
      New: [this.permissionArr.New, []],
      edit: [this.permissionArr.edit, []],
      delete: [this.permissionArr.delete, []],
      login: [this.permissionArr.login, []],

    },);

  }
  get username() {
    return this.permissionForm.get('username');
  }
  get Password() {
    return this.permissionForm.get('Password');
  }
  get password2() {
    return this.permissionForm.get('Password');
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
  get login() {
    return this.permissionForm.get('login');
  }

  ngOnInit(): void {
    this.userpermissionId = this.activateRout.snapshot.paramMap.get('id');
    if (this.userpermissionId != 0) {
      this.Permission.getuserpermissionbyid(this.userpermissionId).subscribe((res: any) => {
        this.userpage = res
        console.log(res);
      })
    }
    console.log(this.userpermissionId);


  }
  onPasswordInput() {
    if (this.permissionForm.hasError('passwordMismatch'))
      this.password2.setErrors([{'passwordMismatch': true}]);
    else
      this.password2.setErrors(null);
  }


  changeChkState(elment:number,id:number) {
    this.permissionArr.forEach(chk => {
      if (elment === chk.pageId && id === 1 ) 
        chk.New =!chk.New;
        if (elment === chk.pageId && id === 2 ) 
        chk.edit =!chk.edit;
        if (elment === chk.pageId && id === 3 ) 
        chk.delete =!chk.delete;
        if (elment === chk.pageId && id === 4 ) 
        chk.login =!chk.login;

      
    });
  }

  editpermission() {
    if (this.userpermissionId > 0)
    {
      this.permissionArr.forEach(chk => {
      
        this.Permission.edituserpermission(this.permissionArr ,chk ).subscribe((res: any) => {
            if (res != null) {
              this.snackBar.openSnackBar('sucessfully update ', 'Close', 'green-snackbar');
              this.router.navigate(['/defaultPage/permission'])
            }
            else {
              this.snackBar.openSnackBar('Falidd update ', 'Close', 'red-snackbar');
      
            }
      
      
      })})
    }


    
  

  }



}
