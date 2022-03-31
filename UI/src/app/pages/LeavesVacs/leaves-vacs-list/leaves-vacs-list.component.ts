import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LeavesVac } from 'src/app/models/LeavesVac.model';
import { LeavesVacsService } from 'src/app/services/LeavesVacs/leaves-vacs.service';

@Component({
  selector: 'app-leaves-vacs-list',
  templateUrl: './leaves-vacs-list.component.html',
  styleUrls: ['./leaves-vacs-list.component.css']
})
export class LeavesVacsListComponent implements OnInit {

 
  dataSource!: MatTableDataSource<LeavesVac>;
  leavesVacations: LeavesVac[]=[];
  colums: string[] = ["Id","VacName"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private LeavesVacsService:LeavesVacsService) {
  
  }

  ngOnInit(): void {
    this.getListOfleavesVacations();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfleavesVacations() {
    this.LeavesVacsService.getLeavesVacs().subscribe((res: any) => {
      this.leavesVacations = res;
    this.dataSource = new MatTableDataSource(this.leavesVacations);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

 
}
