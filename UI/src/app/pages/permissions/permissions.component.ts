import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
import { pages } from 'src/app/models/pages';

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

  dataSource!: MatTableDataSource<pages>;
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
      pageId: [this.permissionArr.pageId, ],
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

  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });
  }


  getpages() {


    this.Permission.getpages().subscribe((res: any) => {
      this.pages = res;
      this.dataSource = new MatTableDataSource(this.pages);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  createpermission() {
    if (this.permissionForm.get('New')?.value == undefined) {
      this.permissionForm.patchValue({
        New: false,
      });
    }
    if (this.permissionForm.get('edit')?.value == undefined) {
      this.permissionForm.patchValue({
        edit: false,
      });
    }
    if (this.permissionForm.get('delete')?.value == undefined) {
      this.permissionForm.patchValue({
        delete: false,
      });
    }
    if (this.permissionForm.get('pageId')?.value == undefined) {
      this.permissionForm.patchValue({
        pageId: null,
      });
    }

    // this.Permission.addpermission(this.permissionForm.value).subscribe((res: any) => {
    //   if (res != null) {
    //     this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
    //     this.router.navigate(['/defaultPage/permission'])
    //   }
    //   else {
    //     this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

    //   }

    // });
    console.log(this.permissionForm.value);

  }
  clear() {
    this.permissionForm.reset();
  }

}
