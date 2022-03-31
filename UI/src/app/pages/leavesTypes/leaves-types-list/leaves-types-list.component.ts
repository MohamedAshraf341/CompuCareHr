import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { leavesType } from 'src/app/models/leavesType.model';
import { LeavesTypesService } from 'src/app/services/leavesTypes/leaves-types.service';
@Component({
  selector: 'app-leaves-types-list',
  templateUrl: './leaves-types-list.component.html',
  styleUrls: ['./leaves-types-list.component.css']
})
export class LeavesTypesListComponent implements OnInit {

  
  dataSource!: MatTableDataSource<leavesType>;
  leavesTypes: leavesType[]=[];
  colums: string[] = ["Id","Name"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private LeavesTypesService:LeavesTypesService) {
  
  }

  ngOnInit(): void {
    this.getListOfleavesTypes();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfleavesTypes() {
    this.LeavesTypesService.getLeavesTypes().subscribe((res: any) => {
      this.leavesTypes = res;
    this.dataSource = new MatTableDataSource(this.leavesTypes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

 
}
