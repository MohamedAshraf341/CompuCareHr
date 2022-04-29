import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { branch } from 'src/app/models/branch.model';
import { BranchService } from 'src/app/services/branch/branch.service';
@Component({
  selector: 'app-add-or-editbranch',
  templateUrl: './add-or-editbranch.component.html',
  styleUrls: ['./add-or-editbranch.component.scss']
})
export class AddOrEditbranchComponent implements OnInit {
  alert:boolean=false;
  branchs!: branch;
  branchForm:FormGroup;
  branchId:any;
  button:any;
  constructor(private location: Location,
    public branchservices:BranchService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.branchId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.branchId>0)
    {
      this.branchservices.getBranchesIdUrl(this.branchId).subscribe((res:branch)=>{
        this.branchs = res;
      })

    }
    this.branchForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.branchForm.controls;
  }
  SubmitAdd(){
    console.log(this.branchForm.value);
    this.branchservices.addBranch( this.branchForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.branchForm.value);
    this.branchservices.editBranch( this.branchId,this.branchForm.value).subscribe((res:any) => {
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
    this.branchForm.reset();
    this.alert=false;

  }

}
