import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://localhost:64633/api";

  constructor(private http:HttpClient) { }

  getEquityList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Equity');
  }

  putEquity(val:any){
    return this.http.put(this.ApiUrl+'/Equity',val);
  }

  deleteEquity(val:any){
    return this.http.delete(this.ApiUrl+'/Equity/'+val);
  }

  getBondList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Bond');
  }

  putBond(val:any){
    return this.http.put(this.ApiUrl+'/Bond',val);
  }

  deleteBond(val:any){
    return this.http.delete(this.ApiUrl+'/Bond/'+val);
  }

  activeSecurity(){
    return this.http.get(this.ApiUrl+'/Equity/ActiveSecurities/');
  }

  inactiveSecurity(){
    return this.http.get(this.ApiUrl+'/Equity/InActiveSecurities/');
  }
}
