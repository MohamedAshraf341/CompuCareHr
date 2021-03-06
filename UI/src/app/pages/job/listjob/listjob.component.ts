import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ActivatedRoute, Router } from '@angular/router';
import { job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job/job.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listjob',
  templateUrl: './listjob.component.html',
  styleUrls: ['./listjob.component.css']
})
export class ListjobComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;
 
  dataSource!: MatTableDataSource<job>;
  jobs: job[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private jobService:JobService,  
     private router:Router,
    private snackBar: MatSnackBarComponent,private dialog: MatDialog,
    private activateRout:ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.getListOfjobes();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfjobes() {
    this.jobService.getJobUrl().subscribe((res: any) => {
      this.jobs = res;
    this.dataSource = new MatTableDataSource(this.jobs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  view(id:number,button:boolean)
  {
    this.router.navigate(['/defaultPage/addOrEditjob/'+id+'/'+button])
  }
  addOrEditjob(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditjob',id])
  }
  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Job',
        message: 'Are you sure, you want to remove an Job: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.jobService.deleteJob(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfjobes();
        });
      }
    });  

   
  }


}
