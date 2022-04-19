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
import { MatCheckboxChange } from '@angular/material/checkbox';
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

   SetChkState(elment:number,id:number,Val:boolean):boolean { 
    
    if ( id === 1 )     
    {
    this.userpage[elment-1].New =Val;  
    return Val;
    }  
     if ( id === 2 ) 
     {
      this.userpage[elment-1].edit =Val;  
      return Val;
     }
      if (id === 3 ) 
      {
      this.userpage[elment-1].delete =Val;  
      return Val;
      }
     if ( id === 4 ) 
     {
     this.userpage[elment-1].login =Val; 
     return Val; 
     }
     else 
    return false;
  }
  setallchk(id:number,ob: MatCheckboxChange)
  {
    this.userpage.forEach(chk => {
      if ( id === 1 && ob.checked &&  !chk.New) 
        chk.New=ob.checked;
        if ( id === 1 && !ob.checked &&  chk.New) 
        chk.New=ob.checked;

        if ( id === 2 && ob.checked &&  !chk.edit) 
        chk.edit=ob.checked;
        if ( id === 2 && !ob.checked &&  chk.edit) 
        chk.edit=ob.checked;

        if ( id === 3 && ob.checked &&  !chk.delete) 
        chk.delete=ob.checked;
        if ( id === 3 && !ob.checked &&  chk.delete) 
        chk.delete=ob.checked;

        if ( id === 4 && ob.checked &&  !chk.login) 
        chk.login=ob.checked;
        if ( id === 4 && !ob.checked &&  chk.login) 
        chk.login=ob.checked;
    })
  }
  changeChkState(elment:number,id:number) {
     
  //  this.userpage.forEach(chk => {
      if ( id === 1 ) 
      this.userpage[elment-1].New =!this.userpage[elment-1].New;
       if ( id === 2 ) 
        this.userpage[elment-1].edit =!this.userpage[elment-1].edit;
        if (id === 3 ) 
        this.userpage[elment-1].delete =!this.userpage[elment-1].delete;
       if ( id === 4 ) 
       this.userpage[elment-1].login =!this.userpage[elment-1].login;

       
  //  });
  }

  createpermission() {
   
    console.log(this.userpage);
    this.row1=0;
    this.userpage[0].UserId=this.userpermissionId;
    this.userpage[0].username=this.permissionArr.username
    this.userpage[0].password=this.permissionArr.password
    console.log(this.userpage);
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
