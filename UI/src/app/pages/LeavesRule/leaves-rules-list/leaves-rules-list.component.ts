import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LeavesRule } from 'src/app/models/LeavesRule.model';
import { LeavesRulesService } from 'src/app/services/LeavesRules/leaves-rules.service';

@Component({
  selector: 'app-leaves-rules-list',
  templateUrl: './leaves-rules-list.component.html',
  styleUrls: ['./leaves-rules-list.component.css']
})
export class LeavesRulesListComponent implements OnInit {

 
  
  dataSource!: MatTableDataSource<LeavesRule>;
  leavesRules: LeavesRule[]=[];
  colums: string[] = ["Id","Name"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private LeavesRulesService:LeavesRulesService) {
  
  }

  ngOnInit(): void {
    this.getListOfleavesRules();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfleavesRules() {
    this.LeavesRulesService.getLeavesRules().subscribe((res: any) => {
      this.leavesRules = res;
    this.dataSource = new MatTableDataSource(this.leavesRules);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

 
}
