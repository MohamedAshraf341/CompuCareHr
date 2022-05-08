import { Component, OnInit } from '@angular/core';
import { LeavesRule } from 'src/app/models/LeavesRule.model';
import { leavesType } from 'src/app/models/leavesType.model';
import { LeavesVac } from 'src/app/models/LeavesVac.model';
import { LeavesService } from 'src/app/services/leaves/leaves.service';
import { LeavesRulesService } from 'src/app/services/LeavesRules/leaves-rules.service';
import { LeavesTypesService } from 'src/app/services/leavesTypes/leaves-types.service';
import { LeavesVacsService } from 'src/app/services/LeavesVacs/leaves-vacs.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-or-editleaves',
  templateUrl: './add-or-editleaves.component.html',
  styleUrls: ['./add-or-editleaves.component.scss']
})
export class AddOrEditleavesComponent implements OnInit {
  alert:boolean=false;
  leaves!: any;
  leaveForm:FormGroup;
  leaveId:any;
  button:any;
  leavesTypes: leavesType[] = [];
  LeavesRules: LeavesRule[] = [];
  LeavesVacs: LeavesVac[] = [];
  constructor(private location: Location,
    private LeavesService: LeavesService,
    private route: Router,
    private activateRout: ActivatedRoute,
    private LeavesTypesService: LeavesTypesService,
    private LeavesRulesService: LeavesRulesService,
    private LeavesVacsService: LeavesVacsService,
    ) { }
  ngOnInit(): void {
    this.leaveId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.leaveId>0)
    {
      this.LeavesService.getLeavesIdUrl(this.leaveId).subscribe((res:any)=>{
        this.leaves = res;
        console.log(this.leaves);
      })

    }
    this.leaveForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Alis: new FormControl('', Validators.required),
      Type: new FormControl('', [Validators.required]),
      ISsub: new FormControl('', Validators.required),
      AcceptVac: new FormControl('', [Validators.required]),
      leavesVacId: new FormControl('', Validators.required),
      CutVal: new FormControl('', [Validators.required]),
      LeavesRuleID: new FormControl('', Validators.required),
    });
    this.getListOfleavesTypes();
    this.getListOfleavesRules();
    this.getListOfleavesVacations();
  }
  get f(){
    return this.leaveForm.controls;
  }
  SubmitAdd(){
    console.log(this.leaveForm.value);
    this.LeavesService.addLeaves( this.leaveForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.leaveForm.value);
    this.LeavesService.editLeaves( this.leaveId,this.leaveForm.value).subscribe((res:any) => {
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
    this.leaveForm.reset();
    this.alert=false;

  }
  getListOfleavesTypes() {
    this.LeavesTypesService.getLeavesTypes().subscribe((res: any) => {
      this.leavesTypes = res;
    });
  }
  getListOfleavesRules() {
    this.LeavesRulesService.getLeavesRules().subscribe((res: any) => {
      this.LeavesRules = res;

    });
  }
  getListOfleavesVacations() {
    this.LeavesVacsService.getLeavesVacs().subscribe((res: any) => {
      this.LeavesVacs = res;

    });
  }
}
