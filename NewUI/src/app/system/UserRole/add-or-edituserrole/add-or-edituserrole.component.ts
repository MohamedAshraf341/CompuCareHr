import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { employee } from 'src/app/models/employee.model';
import { pages } from 'src/app/models/pages';
import { usersystempage } from 'src/app/models/usersystempage';
import { PermissionService } from 'src/app/services/permission/permission.service';

@Component({
  selector: 'app-add-or-edituserrole',
  templateUrl: './add-or-edituserrole.component.html',
  styleUrls: ['./add-or-edituserrole.component.scss']
})
export class AddOrEdituserroleComponent implements OnInit {
  alert:boolean=false;
  userroles!: pages;
  userroleForm:FormGroup;
  userroleId:any;
  button:any;
  employees: employee[] = [];
  userpages :usersystempage[]=[];

  userupdate:usersystempage[]=[];


  constructor(private location: Location,
    private employeeService: EmployeeService,
    private Permission: PermissionService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.userroleId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.userroleId==0)
    {
      this.getpagesadd();
    }
    if(this.userroleId>0)
    {
      this.getpagesedit(this.userroleId);

    }
    
    this.userroleForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      pageId: new FormControl(),
      New: new FormControl(),
      edit: new FormControl(),
      delete: new FormControl(),
      login: new FormControl(),

    });
  }
  getpagesadd() {


    this.Permission.getpermission().subscribe((res: any) => {
      this.userpages = res;       
    });
  }
  getpagesedit(id:number) {
    this.Permission.getuserpermissionbyid(id).subscribe((res: any) => {
      this.userpages = res;
      console.log(res);      
    });
  }
  getListOfemployees() {
    this.employeeService.getEmployeeUrl().subscribe((res: any) => {
      this.employees = res;
    });

  
  }
  get f(){
    return this.userroleForm.controls;
  }
  SubmitAdd(){
    this.userpages[0].username=this.userroleForm.value.username;
    this.userpages[0].password=this.userroleForm.value.password;
    console.log(this.userpages);
    this.Permission.addpermission1( this.userpages).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  Submitedit(){
    console.log(this.userpages);
    this.Permission.addpermission1( this.userpages).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  Backtolist()
  {
    this.location.back();
  }
  clear()
  {
    this.userroleForm.reset();
    this.alert=false;

  }
  checkAllCheckBox(name:string, ev: any) { 
    console.log(ev.target.checked)  ;  
    if(name === 'New')
		this.userpages.forEach(userpage => userpage.New = ev.target.checked)
    if(name === 'edit')
    this.userpages.forEach(userpage => userpage.edit = ev.target.checked)
    if(name === 'delete')
    this.userpages.forEach(userpage => userpage.delete = ev.target.checked)
    if(name === 'login')
    this.userpages.forEach(userpage => userpage.login = ev.target.checked)
    


	}
  isAllChecked() {
    return this.userpages.every(_ => _.New);
  }
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  

}
