import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.css']
})
export class ListaccountComponent implements OnInit {

  dataSource!: MatTableDataSource<account>;
  accounts: account[]=[];
  colums: string[] = ["AccountCode", "AccountName","EmpId","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private accountService:AccountService,
  ) {
  }

  ngOnInit(): void {
    this.getListOfAccounts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfAccounts() {
    this.accountService.getAccountsUrl().subscribe((res: any) => {
      this.accounts = res;
      this.dataSource = new MatTableDataSource(this.accounts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


}
