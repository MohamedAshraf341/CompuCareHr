import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router,ActivatedRoute } from '@angular/router';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
import { pages } from 'src/app/models/pages';
import { usersystempage } from 'src/app/models/usersystempage';
import { ItemStatus } from 'src/app/models/ItemStatus';
@Component({
  selector: 'app-add-user-permission',
  templateUrl: './add-user-permission.component.html',
  styleUrls: ['./add-user-permission.component.css']
})
export class AddUserPermissionComponent implements OnInit {
  userpermissionId: any;
  permissionForm!: FormGroup;
  permissionArr: any = [];
  employees: employee[] = [];
  pages: pages[] = [];
  items: ItemStatus[] = [];
  userpage :usersystempage[]=[];

  dataSource!: MatTableDataSource<usersystempage>;
  colums: string[] = [ "select","PaageName", "New", "edit", "delete","login"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  row1: number;
  constructor(private employeeService: EmployeeService,
    private Permission: PermissionService,
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog, private _formBuilder: FormBuilder,private activateRout: ActivatedRoute,) {
    this.permissionForm = this._formBuilder.group({
      username: [this.permissionArr.username, [Validators.required]],
      password: [this.permissionArr.password, [Validators.required]],
      password2: [this.permissionArr.password2, [Validators.required]],
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
  get password() {
    return this.permissionForm.get('password');
  }
  get password2() {
    return this.permissionForm.get('password2');
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
    if(this.userpermissionId==0)
    {
      this.getpagesadd();
    }
    if (this.userpermissionId != 0) {
      this.getpagesedit(this.userpermissionId);
      
    }
    
    // this.getListOfemployees();
// console.log("faisal");
// console.log(this.userpage);


  }
  onPasswordInput() {
    if (this.permissionForm.hasError('passwordMismatch'))
      this.password2.setErrors([{'passwordMismatch': true}]);
    else
      this.password2.setErrors(null);
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });

  
  }


  
  getpagesedit(id:number) {


    this.Permission.getuserpermissionbyid(id).subscribe((res: any) => {
      this.userpage = res;
      console.log(res);
      this.permissionArr.username=res[0].username;
        this.permissionArr.password=res[0].password;
        this.permissionArr.Password2=res[0].password;
      //   res.forEach(chk =>{
      //   this.permissionArr.username=res[0].username;
      //   this.permissionArr.password=res[0].password;
      //   this.permissionArr.Password2=res[0].password;
      //   this.permissionArr.New=chk.New;
      //   this.permissionArr.edit=chk.edit;
      //   this.permissionArr.delete=chk.delete;

        
      // })

       console.log(this.permissionArr.username);
      this.dataSource = new MatTableDataSource(this.userpage);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
       
    });
  }
  getpagesadd() {


    this.Permission.getpermission().subscribe((res: any) => {
      this.userpage = res;
      this.dataSource = new MatTableDataSource(this.userpage);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
       
    });
  }

   SetChkState(Val:boolean):boolean { 
    return Val;
  }
  changeChkState(elment:number,id:number) {
    this.userpage.forEach(chk => {
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

  createpermission() {
    console.log("faisal");
    console.log(this.userpage);
    this.row1=0;
    this.userpage[0].username=this.permissionArr.username
    this.userpage[0].password=this.permissionArr.password
    this.Permission.addpermission1(this.userpage ).subscribe((res: any) => {
      if (res != null && this.row1==this.userpage.length) {
        this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
      } 
  })
    
    // this.userpage.forEach(chk => {
    //   chk.UserId = 0;
    //   chk.username=this.username.value;
    //   chk.password=this.password.value;
    
    // this.row1=this.row1+1;
    //   this.Permission.addpermission1(chk ).subscribe((res: any) => {
    //     if (res != null && this.row1==this.userpage.length) {
    //       this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
    //      //this.router.navigate(['/defaultPage/permission'])
    //     }
    //     //  else {
    //     //    this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');
    
    //     //  }
    
    
    // })})
  

  }
  clear() {
    this.permissionForm.reset();
  }


}
