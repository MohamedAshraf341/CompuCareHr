import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ActivatedRoute, Router } from '@angular/router';
import { bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus/bus.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css']
})
export class ListbusComponent implements OnInit {

  New :boolean;
  edit :boolean;
  delete :boolean;
  dataSource!: MatTableDataSource<bus>;
  buses: bus[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private busService:BusService,
    private router:Router,   private snackBar: MatSnackBarComponent,private dialog: MatDialog,
    private activateRout:ActivatedRoute) {
 

  }

  ngOnInit(): void {
    this.getListOfBranches();
    this.New=JSON.parse(this.activateRout.snapshot.paramMap.get('New'));
    this.edit=JSON.parse(this.activateRout.snapshot.paramMap.get('edit'));
    this.delete=JSON.parse(this.activateRout.snapshot.paramMap.get('delete'));

  }
  view(id:number,button:boolean)
  {
    this.router.navigate(['/defaultPage/addOrEditbus/'+id+'/'+button])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfBranches() {
    this.busService.getBusUrl().subscribe((res: any) => {
      this.buses = res;
    this.dataSource = new MatTableDataSource(this.buses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  addOrEditBus(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditbus',id])
  }

  Delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Bus',
        message: 'Are you sure, you want to remove an Bus: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.busService.deleteBus(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfBranches();
        });
      }
    }); 
  
  }
}
