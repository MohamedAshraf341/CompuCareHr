import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch/branch.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listbranch',
  templateUrl: './listbranch.component.html',
  styleUrls: ['./listbranch.component.css']
})
export class ListbranchComponent implements OnInit {

 
  dataSource!: MatTableDataSource<branch>;
  branches: branch[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private branchService:BranchService,
    private router:Router,   private snackBar: MatSnackBarComponent,private dialog: MatDialog) {
 

  }

  ngOnInit(): void {
    this.getListOfBranches();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfBranches() {
    this.branchService.getBranchesUrl().subscribe((res: any) => {
      this.branches = res;
    this.dataSource = new MatTableDataSource(this.branches);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(res);
    });
  }
  addOrEditBranch(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditbranch',id])
  }

  delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Branch',
        message: 'Are you sure, you want to remove an Branch: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.branchService.deleteBranch(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfBranches();
        });
      }
    }); 
  
  }
}
