import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { cost } from 'src/app/models/cost.model';
import { CostService } from 'src/app/services/cost/cost.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listcost',
  templateUrl: './listcost.component.html',
  styleUrls: ['./listcost.component.css']
})
export class ListcostComponent implements OnInit {

 

  dataSource!: MatTableDataSource<cost>;
  costs: cost[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private costService:CostService,  
    private router:Router,
    private snackBar: MatSnackBarComponent,private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.getListOfCosts();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfCosts() {
    this.costService.getCostUrl().subscribe((res: any) => {
      this.costs = res;
      console.log( this.costs)
    this.dataSource = new MatTableDataSource(this.costs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditCost(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditcost',id])
  }
  delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Cost',
        message: 'Are you sure, you want to remove an Cost: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.costService.deleteCost(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfCosts();
        });
      }
    }); 

  }

}
