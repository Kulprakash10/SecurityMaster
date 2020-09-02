import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-eedit',
  templateUrl: './eedit.component.html',
  styleUrls: ['./eedit.component.css']
})
export class EeditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() equity:any;
  ID:number;
  SecurityName:String;
  IsActiveSecurity:String;
  BBGTickerAndExchange:String;
  OpenPrice : Number;
	ClosePrice : Number;
	AskPrice : Number;
	BidPrice : Number;
	Volume : Number;
  PricingCurrency:String;
  ReturnYTD:number;
  PFCreditRating:String;
  DividendAmount:number;
  DividendType:String;

  ngOnInit(): void {
    this.ID=this.equity.ID;
    this.SecurityName=this.equity.SecurityName;
    this.IsActiveSecurity=this.equity.IsActiveSecurity;
    this.BBGTickerAndExchange=this.equity.BBGTickerAndExchange;
    this.OpenPrice = this.equity.OpenPrice;
    this.ClosePrice = this.equity.ClosePrice;
    this.AskPrice = this.equity.AskPrice;
    this.BidPrice = this.equity.BidPrice;
    this.Volume = this.equity.Volume;
    this.PricingCurrency=this.equity.PricingCurrency;
    this.ReturnYTD=this.equity.ReturnYTD;
    this.PFCreditRating=this.equity.PFCreditRating;
    this.DividendAmount=this.equity.DividendAmount;
    this.DividendType=this.equity.DividendType;
  }

  updateEquity(){
    var val= {
      ID:this.ID,
      SecurityName:this.SecurityName,
      IsActiveSecurity:this.IsActiveSecurity,
      BBGTickerAndExchange:this.BBGTickerAndExchange,
      OpenPrice : this.OpenPrice,
      ClosePrice : this.ClosePrice,
      AskPrice : this.AskPrice,
      BidPrice : this.BidPrice,
      Volume : this.Volume,
      PricingCurrency:this.PricingCurrency,
      ReturnYTD:this.ReturnYTD,
      PFCreditRating:this.PFCreditRating,
      DividendAmount:this.DividendAmount,
      DividendType:this.DividendType
    };
    this.service.putEquity(val).subscribe(res=>{
      alert(res.toString());

    });

  }

}
