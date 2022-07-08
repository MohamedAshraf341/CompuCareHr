import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {transaction} from 'src/app/models/transactions';
import { TransactionService } from 'src/app/services/Transaction/transaction.service';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-listholiday',
  templateUrl: './listholiday.component.html',
  styleUrls: ['./listholiday.component.scss']
})
export class ListholidayComponent implements OnInit {
  userpage: usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  transactions: transaction[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private transactionService: TransactionService,private Permission: PermissionService
  ) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,10);
    this.getListOftable();

  }

  getpagepermission(userid:number,pageid:number) {
    this.Permission.getuserpermissionbypageid(userid,pageid).subscribe((res: any) => {
      this.userpage = res;
      console.log(res);
      if(this.userpage[0].New===false && this.userpage[0].edit===false && this.userpage[0].delete===false && this.userpage[0].login===false )
      {
        return this.router.navigate(['/NotFound']);
      }
    });
  }
  public toggle(type) {
    this.type = type;
  }
  getListOftable() {
    this.transactionService.getallholiday().subscribe((res: any) => {
      this.transactions = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditholihday/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditholihday', id])
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
