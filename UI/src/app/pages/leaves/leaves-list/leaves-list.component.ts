import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { leavemodel } from 'src/app/models/leavemodel.model';
import { LeavesService } from 'src/app/services/leaves/leaves.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.css']
})
export class LeavesListComponent implements OnInit {

  dataSource!: MatTableDataSource<leavemodel>;
  leaves: leavemodel[]=[];
  colums: string[] = ["Id","Name", "Alis","Issub","AcceptVac","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private LeavesService:LeavesService,
    private router:Router,
    private snackBar: MatSnackBarComponent,private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.getListOfLeaves();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfLeaves() {
    this.LeavesService.getLeavesUrl().subscribe((res: any) => {
      this.leaves = res;
      console.log('res',res)
    this.dataSource = new MatTableDataSource(this.leaves);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditLeaves(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditLeaves',id])
  }
  delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove  leaves',
        message: 'Are you sure, you want to remove an leave: ' + element.Name
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.LeavesService.deleteLeaves(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
    
          this.getListOfLeaves();
        });
      }
    }); 
 
  }
}
