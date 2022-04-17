import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserSystem } from 'src/app/models/UserSystem';
import { PermissionService } from 'src/app/services/permission/permission.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
@Component({
  selector: 'app-list-user-permission',
  templateUrl: './list-user-permission.component.html',
  styleUrls: ['./list-user-permission.component.css']
})
export class ListUserPermissionComponent implements OnInit {

  userpermissionId: any;

  dataSource!: MatTableDataSource<UserSystem>;
  usersystem: UserSystem[]=[];
  colums: string[] = ["id","name","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private peerService:PermissionService,
    private router:Router,   private snackBar: MatSnackBarComponent,private dialog: MatDialog) {
 
  }

  ngOnInit(): void {
    
    this.getListOfuserpermission();
     
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfuserpermission() {
    this.peerService.getusers().subscribe((res: any) => {
      this.usersystem = res;
    this.dataSource = new MatTableDataSource(this.usersystem);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  Edituserpermission(id:number)
  {
    this.router.navigate(['/defaultPage/adduserpermission',id])
  }

  // delete(element:any)
  // {
  //   const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
  //     data: {
  //       title: 'Confirm Remove Bus',
  //       message: 'Are you sure, you want to remove an user: ' + element.Enname
  //     }
  //   });
  //   confirmDialog.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       this.peerService.deleteBus(element.Id).subscribe((res: any) => {
  //         this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
  //         this.getListOfBranches();
  //       });
  //     }
  //   }); 
  
  // }

}
