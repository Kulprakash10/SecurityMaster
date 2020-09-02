import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http'  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:64633/api/';  
  
  UploadExcel(formData: FormData) {  
    
    console.log('Bond connection');
    let headers = new HttpHeaders();  
  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
  
    const httpOptions = { headers: headers };  
  
    return this.http.post(this.url+'Bond' , formData, httpOptions)
     
  }

  UploadExcelE(formData: FormData) {  
    
    console.log('Equity connection');
    let headers = new HttpHeaders();  
  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
  
    const httpOptions = { headers: headers };  
  
    return this.http.post(this.url+'Equity' , formData, httpOptions)
     
  }
   }  


