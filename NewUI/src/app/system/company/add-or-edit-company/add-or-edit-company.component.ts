import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { company } from 'src/app/models/company.model';

@Component({
  selector: 'app-add-or-edit-company',
  templateUrl: './add-or-edit-company.component.html',
  styleUrls: ['./add-or-edit-company.component.scss']
})
export class AddOrEditCompanyComponent implements OnInit {
  alert:boolean=false;
  companies!: company;
  companyForm:FormGroup;
  companyId:any;
  button:any;
  constructor(private location: Location,
    public compservices:CompanyService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
//Custom day view
public modelCustom: NgbDateStruct;
public isWeekend(date: NgbDateStruct) {
  const d = new Date(date.year, date.month - 1, date.day);
  return d.getDay() === 0 || d.getDay() === 6;
}
public isDisabled(date: NgbDateStruct, current: {month: number}) {
  return date.month !== current.month;
}
  ngOnInit(): void {
    this.companyId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    // console.log(this.activateRout.snapshot.paramMap.get('button'));
    console.log(this.button);
    if(this.companyId>0)
    {
      this.compservices.getCompanyIdUrl(this.companyId).subscribe((res:company)=>{
        this.companies = res;
        console.log(this.companies);
      })

    }
    this.companyForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
      Owner: new FormControl('', [Validators.required]),
      City: new FormControl('', Validators.required),
      Insno: new FormControl('', [Validators.required]),
      Add: new FormControl('', Validators.required),
      Twon: new FormControl('', [Validators.required]),
      Law: new FormControl('', Validators.required),
      office: new FormControl('', [Validators.required]),
      Person: new FormControl('', Validators.required),
      Date: new FormControl('', [Validators.required]),
      PerJob: new FormControl('', Validators.required),
      isActive: new FormControl(false, ),
    });
  }
  get f(){
    return this.companyForm.controls;
  }
  SubmitAdd(){
    console.log(this.companyForm.value);
    this.compservices.addCompany( this.companyForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.companyForm.value);
    this.compservices.editCompany( this.companyId,this.companyForm.value).subscribe((res:any) => {
         console.log('company Updated successfully!');
         this.location.back();
    })
  }
  Backtolist()
  {
    this.location.back();
  }
  clear()
  {
    this.companyForm.reset();
    this.alert=false;

  }

}
