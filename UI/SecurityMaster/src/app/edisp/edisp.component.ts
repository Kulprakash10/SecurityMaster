import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-edisp',
  templateUrl: './edisp.component.html',
  styleUrls: ['./edisp.component.css']
})
export class EdispComponent implements OnInit {

  constructor(private service:SharedService) { }

  EquityList:any=[];

  ModalTitle:String;
  ActivateEditEquityComp:boolean=false;
  equity:any;

  ngOnInit(): void {
    this.refreshEquityList();
  }

  refreshEquityList(){
    this.service.getEquityList().subscribe(data=>{
      this.EquityList=data;

    });
  }

  editClick(item){
    this.equity=item;
    this.ModalTitle="Edit Equity"
    this.ActivateEditEquityComp=true;
  }

  closeClick(){
    this.ActivateEditEquityComp=false;
    this.refreshEquityList();
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteEquity(item.ID).subscribe(data=>{
        alert(data.toString());
        this.refreshEquityList();
      });
    }
  }

}
