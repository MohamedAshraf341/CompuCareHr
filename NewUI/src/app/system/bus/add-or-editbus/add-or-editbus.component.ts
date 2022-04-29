import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { bus } from 'src/app/models/bus.model';
import { BusService } from 'src/app/services/bus/bus.service';
@Component({
  selector: 'app-add-or-editbus',
  templateUrl: './add-or-editbus.component.html',
  styleUrls: ['./add-or-editbus.component.scss']
})
export class AddOrEditbusComponent implements OnInit {
  alert:boolean=false;
  buss!: bus;
  busForm:FormGroup;
  busId:any;
  button:any;
  constructor(private location: Location,
    public busservices:BusService,
    private router: Router,
    private activateRout:ActivatedRoute,) { }
    public modelCustom: NgbDateStruct;
  ngOnInit(): void {
    this.busId=this.activateRout.snapshot.paramMap.get('id');
    this.button=this.activateRout.snapshot.paramMap.get('button');
    console.log(this.button);
    if(this.busId>0)
    {
      this.busservices.getBusIdUrl(this.busId).subscribe((res:bus)=>{
        this.buss = res;
      })

    }
    this.busForm = new FormGroup({
      Arname: new FormControl('', [Validators.required]),
      Enname: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.busForm.controls;
  }
  SubmitAdd(){
    console.log(this.busForm.value);
    this.busservices.addBus( this.busForm.value).subscribe((res:any) => {
         console.log('company Added successfully!');
         this.alert=true;
        //  this.location.back();
    })
  }
  SubmitEdit(){
    console.log(this.busForm.value);
    this.busservices.editBus( this.busId,this.busForm.value).subscribe((res:any) => {
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
    this.busForm.reset();
    this.alert=false;

  }

}
