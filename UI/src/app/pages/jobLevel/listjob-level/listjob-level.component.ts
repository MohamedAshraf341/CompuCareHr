import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ActivatedRoute, Router } from '@angular/router';
import { jobLevel } from 'src/app/models/jobLevel.model';
import { JobLevelService } from 'src/app/services/jobLevel/job-level.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listjob-level',
  templateUrl: './listjob-level.component.html',
  styleUrls: ['./listjob-level.component.css']
})
export class ListjobLevelComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;
 
  dataSource!: MatTableDataSource<jobLevel>;
  jobLevels: jobLevel[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private jobLevelService:JobLevelService,
    private router:Router,
    private snackBar: MatSnackBarComponent,private dialog: MatDialog,
    private activateRout:ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.getListOfjobeLevels();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfjobeLevels() {
    this.jobLevelService.getJobLevelUrl().subscribe((res: any) => {
      this.jobLevels = res;
    this.dataSource = new MatTableDataSource(this.jobLevels);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditjoblevel(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditjoblevel',id])
  }
  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove  Job Level',
        message: 'Are you sure, you want to remove an Job Level: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.jobLevelService.deleteJobLevel(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
    
          this.getListOfjobeLevels();
        });
      }
    }); 
 
  }
}
