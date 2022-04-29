import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { ConfirmDeleteComponent } from '../../dialog/confirm-delete/confirm-delete.component';
// import { MatSnackBarComponent } from '../../dialog/mat-snack-bar/mat-snack-bar.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  companies: company[] = [];
  company: company
  constructor(
    // private snackBar: MatSnackBarComponent,
    public modalService: NgbModal,
    private router: Router,
    private companyService: CompanyService,
    private dialog: MatDialog,) {
  }
  ngOnInit(): void {
    this.getListOfComanies();
  }
  public toggle(type) {
    this.type = type;
  }
  getListOfComanies() {
    this.companyService.getCompanyUrl().subscribe((res: any) => {
      this.companies = res;
    });

  }
  view(id: number, button: boolean) {
    this.router.navigate(['/addOrEditCompany/' + id + '/' + button])
  }
  addOrEdit(id: number) {
    this.router.navigate(['/addOrEditCompany', id])
  }
  Delete(element: any) {

    this.companyService.deleteCompany(element.Id).subscribe((res: any) => {
      this.getListOfComanies();
    });
    // const confirmDialog = this.dialog.open(ConfirmDeleteComponent, {
    //   data: {
    //     title: 'Confirm Remove Company',
    //     message: 'Are you sure, you want to remove an Company: ' + element.Enname
    //   }
    // });
    // confirmDialog.afterClosed().subscribe(result => {
    //   if (result === true) {
    //     this.companyService.deleteCompany(element.Id).subscribe((res: any) => {
    //       this.snackBar.openSnackBar('sucessfully Deleted ', 'Close', 'green-snackbar');
    //       this.getListOfComanies();
    //     });
    //   }
    // }); 
  
  
  }
  public openModal(modalContent, company) {

    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      if(result === 'yes')
      {
        this.Delete(company);
      }
    });
  }
  // open(content, videoId) {  
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
  //     this.closeResult = `Closed with: ${result}`;  
  //     if (result === 'yes') {  
  //       this.deleteHero(videoId);  
  //     }  
  //   }, (reason) => {  
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
  //   });  
  // }
  public closeModal() {
    this.modalRef.close();
  }
}


