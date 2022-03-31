import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { location } from 'src/app/models/location.model';
import { LocationService } from 'src/app/services/location/location.service';
import { EmpWorkModel } from 'src/app/models/empWorkModel';


@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css']
})
export class ListlocationComponent implements OnInit {

  dataSource!: MatTableDataSource<EmpWorkModel>;
  locations: EmpWorkModel[]=[];
  colums: string[] = ["shiftId", "FromDate","ToDate","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private locationService:LocationService) {
  }

  ngOnInit(): void {
    this.getListOfLocations();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfLocations() {
    this.locationService.getLocationUrl().subscribe((res: any) => {
      console.log(res.data);
      this.locations = res.data;
      this.dataSource = new MatTableDataSource(this.locations);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


}
