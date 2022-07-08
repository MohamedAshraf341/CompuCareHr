import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  userpage : usersystempage[] = [];
  userId:number;
  public modalRef: NgbModalRef;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  companies: company[] = [];
  company: company;
  
  constructor(
    // private snackBar: MatSnackBarComponent,
    public modalService: NgbModal,
    private router: Router,
    private companyService: CompanyService,
    private dialog: MatDialog,private Permission: PermissionService) {
  }
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('UserId') as any);
    this.getpagepermission(this.userId,1); 
    this.getListOfComanies();
   


    
  }
  getpagepermission(userid:number,pageid:number) {
    this.Permission.getuserpermissionbypageid(userid,pageid).subscribe((res: any) => {
      this.userpage = res;
      console.log(this.userpage);
      if(this.userpage[0].New===false && this.userpage[0].edit===false && this.userpage[0].delete===false && this.userpage[0].login===false )
    {
      return this.router.navigate(['/NotFound']);
    }
    });
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
  public closeModal() {
    this.modalRef.close();
  }

}


