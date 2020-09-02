import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-show-equity',
  templateUrl: './show-equity.component.html',
  styleUrls: ['./show-equity.component.css']
})
export class ShowEquityComponent implements OnInit {


  constructor(private service:SharedService) { }

  EquityList:any=[];

  ngOnInit(): void {
  }

  refreshEquityList(){
    this.service.getEquityList().subscribe(data=>{
      this.EquityList=data;

    });
  }

}
