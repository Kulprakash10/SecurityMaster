import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:SharedService) { }

  ActiveCount:any;

  InActiveCount:any;

  ngOnInit(): void {
    this.ActiveSecurity();
    this.InActiveSecurity();
  }

  ActiveSecurity(){
    this.service.activeSecurity().subscribe(data=>{
      console.log(data);
      this.ActiveCount=data;
    });
  }

  
  InActiveSecurity(){
    this.service.inactiveSecurity().subscribe(data=>{
      console.log(data);
      this.InActiveCount=data;
    });
  }

}
