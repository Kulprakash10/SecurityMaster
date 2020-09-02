import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';


@Component({
  selector: 'app-show',
  templateUrl: './show-bond.component.html',
  styleUrls: ['./show-bond.component.css']
})
export class ShowBondComponent implements OnInit {

  constructor(private service:SharedService) { }

  BondList:any=[];

  ngOnInit(): void {
    this.refreshBondList();
  }

   refreshBondList(){
    this.service.getBondList().subscribe(data=>{
      this.BondList=data;

    });
  }
 

}
