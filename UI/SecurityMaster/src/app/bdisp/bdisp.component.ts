import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-bdisp',
  templateUrl: './bdisp.component.html',
  styleUrls: ['./bdisp.component.css']
})
export class BdispComponent implements OnInit {

  constructor(private service:SharedService) { }

  BondList:any=[];

  ModalTitle:String;
  ActivateEditBondComp:boolean=false;
  bond:any;

  ngOnInit(): void {
    this.refreshBondList();
  }

  refreshBondList(){
    this.service.getBondList().subscribe(data=>{
      this.BondList=data;

    });
  }

  editClick(item){
    this.bond=item;
    this.ModalTitle="Edit Bond"
    this.ActivateEditBondComp=true;
  }

  closeClick(){
    this.ActivateEditBondComp=false;
    this.refreshBondList();
  }

  deleteClick(item){
    
    if(confirm('Are you sure?')){
      this.service.deleteBond(item.ID).subscribe(data=>{
        alert(data.toString());
        this.refreshBondList();
      });
    }
  }

}
