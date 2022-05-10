import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {transaction} from 'src/app/models/transactions';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
@Component({
  selector: 'app-listpermission',
  templateUrl: './listpermission.component.html',
  styleUrls: ['./listpermission.component.scss']
})
export class ListpermissionComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  transactions: transaction[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private transactionService: TransactionService,
  ) {
  }
  ngOnInit(): void {
    this.getListOftable();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.transactionService.getallpermissions().subscribe((res: any) => {
      this.transactions = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditpermission/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditpermission', id])
  }
  Delete(element: any) {

    this.transactionService.deleteTransaction(element.Id).subscribe((res: any) => {
      this.getListOftable();
    });
  }
  public openModal(modalContent, transaction) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if (result === 'yes') {
        this.Delete(transaction);
      }
    });
  }
  public closeModal() {
    this.modalRef.close();
  }

}
