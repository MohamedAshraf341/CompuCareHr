import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { department } from 'src/app/models/department.model';
import {  DepartmentService} from 'src/app/services/department/department.service';
@Component({
  selector: 'app-add-ordepartment',
  templateUrl: './add-ordepartment.component.html',
  styleUrls: ['./add-ordepartment.component.scss']
})
export class AddOrdepartmentComponent implements OnInit {
  alert:boolean=false;
  departments!: department;
  departmentForm:FormGroup;
  departmentId:any;
  button:any;
  constructor(private location: Location,
    public departmentservices:DepartmentService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.departmentId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.departmentId>0)
    {
      this.departmentservices.getDepartmentIdUrl(this.departmentId).subscribe((res:department)=>{
        this.departments = res;
      })

    }
    this.departmentForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.departmentForm.controls;
  }
  SubmitAdd(){
    console.log(this.departmentForm.value);
    this.departmentservices.addDepartment( this.departmentForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.departmentForm.value);
    this.departmentservices.editDepartment( this.departmentId,this.departmentForm.value).subscribe((res:any) => {
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
    this.departmentForm.reset();
    this.alert=false;

  }

}
