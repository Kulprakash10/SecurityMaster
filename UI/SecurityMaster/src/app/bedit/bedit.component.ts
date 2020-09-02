import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-bedit',
  templateUrl: './bedit.component.html',
  styleUrls: ['./bedit.component.css']
})
export class BeditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() bond:any;
  ID : Number;
	SecurityName : String;
	InvestmentType : String;
	BBGTicker : String;
	CouponFrequency : Number;
	Coupon : Number;
	CouponType : String;
	IssueDate : String; 
	Maturity : String;
	PFCreditRating : String;
	OpenPrice : Number;
	LastPrice : Number;
	AskPrice : Number;
	BidPrice : Number;
	Volume : Number;
	CallPrice : Number;
	IssueCurrency : String;

  ngOnInit(): void {
    this.ID = this.bond.ID;
    this.SecurityName = this.bond.SecurityName;
    this.InvestmentType = this.bond.InvestmentType;
    this.BBGTicker = this.bond.BBGTicker;
    this.CouponFrequency = this.bond.CouponFrequency;
    this.Coupon = this.bond.Coupon;
    this.CouponType = this.bond.CouponType;
    this.IssueDate = this.bond.IssueDate;
    this.Maturity = this.bond.Maturity;
    this.PFCreditRating = this.bond.PFCreditRating;
    this.OpenPrice = this.bond.OpenPrice;
    this.LastPrice = this.bond.LastPrice;
    this.AskPrice = this.bond.AskPrice;
    this.BidPrice = this.bond.BidPrice;
    this.Volume = this.bond.Volume;
    this.CallPrice = this.bond.CallPrice;
    this.IssueCurrency = this.bond.IssueCurrency;
  }

  updateBond(){
    var val= {
      ID : this.ID,
      SecurityName : this.SecurityName,
      InvestmentType : this.InvestmentType,
      BBGTicker : this.BBGTicker,
      CouponFrequency : this.CouponFrequency,
      Coupon :this.Coupon,
      CouponType : this.CouponType,
      IssueDate : this.IssueDate, 
      Maturity : this.Maturity,
      PFCreditRating : this.PFCreditRating,
      OpenPrice : this.OpenPrice,
      LastPrice : this.LastPrice,
      AskPrice : this.AskPrice,
      BidPrice : this.BidPrice,
      Volume : this.Volume,
      CallPrice : this.CallPrice,
      IssueCurrency : this.IssueCurrency 
    };
    this.service.putBond(val).subscribe(res=>{
      alert(res.toString());

    });

  }

}
