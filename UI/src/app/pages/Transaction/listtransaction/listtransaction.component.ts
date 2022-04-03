import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import {transaction} from 'src/app/models/transactions';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';

@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.css']
})
export class ListtransactionComponent implements OnInit {
  dataSource!: MatTableDataSource<transaction>;
  transactions: transaction[] = [];
  colums: string[] = ["Empcode", "Empname", "Type", "actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private TransactionService: TransactionService,
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addOrEditshift(id: number) {
    this.router.navigate(['/defaultPage/addtransactions', id])
  }

}
