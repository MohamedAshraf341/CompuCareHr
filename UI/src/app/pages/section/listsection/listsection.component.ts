import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { section } from 'src/app/models/section.model';
import { SectionService } from 'src/app/services/section/section.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-listsection',
  templateUrl: './listsection.component.html',
  styleUrls: ['./listsection.component.css']
})
export class ListsectionComponent implements OnInit {

  dataSource!: MatTableDataSource<section>;
  Sections: section[]=[];
  colums: string[] = ["Id","Enname", "Arname","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private sectionService:SectionService, 
     private router:Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.getListOfsection();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfsection() {
    this.sectionService.getSectionUrl().subscribe((res: any) => {
      this.Sections = res;
    this.dataSource = new MatTableDataSource(this.Sections);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
  addOrEditsection(id:number)
  {
    this.router.navigate(['/defaultPage/addOrEditsection',id])
  }
  view(id:number,button:boolean)
  {
    this.router.navigate(['/defaultPage/addOrEditsection/'+id+'/'+button])
  }
  delete(element:any)
  {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove section',
        message: 'Are you sure, you want to remove an section: ' + element.Enname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.sectionService.deleteSection(element.Id).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
          this.getListOfsection();
        });
      }
    });  
  
  }

}
