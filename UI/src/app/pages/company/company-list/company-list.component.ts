import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  New :boolean;
  edit :boolean;
  delete :boolean;

  dataSource!: MatTableDataSource<company>;
  companies: company[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private companyService:CompanyService,
    private router:Router,   private snackBar: MatSnackBarComponent,private dialog: MatDialog,private activateRout:ActivatedRoute) {
 

  }

  ngOnInit(): void {

    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));
    console.log(this.New);
    console.log(this.edit);
    console.log(this.delete);
    this.getListOfComanies();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfComanies() {
    this.companyService.getCompanyUrl().subscribe((res: any) => {
      this.companies = res;
    this.dataSource = new MatTableDataSource(this.companies);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  addOrEditCompany(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditCompany',id])
  }

  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Company',
        message: 'Are you sure, you want to remove an Company: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.companyService.deleteCompany(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfComanies();
        });
      }
    }); 
  
  }
}
