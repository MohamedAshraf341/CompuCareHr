import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import { publicHoliday } from 'src/app/models/publicHoliday.model';
import { PublicHolidayService } from 'src/app/services/publicHoliday/public-holiday.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-public-holiday-list',
  templateUrl: './public-holiday-list.component.html',
  styleUrls: ['./public-holiday-list.component.css']
})
export class PublicHolidayListComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;

  dataSource!: MatTableDataSource<publicHoliday>;
  publicHolidays: publicHoliday[]=[];
  colums: string[] = ["Id","Enname", "Arname","Fdate","Tdate","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private PublicHolidayService:PublicHolidayService, 
    private router:Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog,
    private activateRout:ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.getListOfPublicHoliday();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfPublicHoliday() {
    this.PublicHolidayService.getPublicHolidayUrl().subscribe((res: any) => {
      this.publicHolidays = res;
    this.dataSource = new MatTableDataSource(this.publicHolidays);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditPublicHoliday(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditPublicHoliday',id])
  }
  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Public Holiday',
        message: 'Are you sure, you want to remove an Public Holiday: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.PublicHolidayService.deletePublicHoliday(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfPublicHoliday();
        });
      }
    }); 
   
  }



}
