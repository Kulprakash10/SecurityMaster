import { Component, OnInit } from '@angular/core';
import{UploadServiceService} from '../upload-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadComponent implements OnInit {
  message: string; 

  constructor(private service:UploadServiceService) { }

  ngOnInit(): void {
  }

  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  isInvalid(){
    if(this.files.length==1){
      return false;
    }
    else{
      return true;
    }
  }
  greaterThanOne(){
    if(this.files.length>1){
      return true;
    }
    else{
      return false;
    }
  }

  uploadFile() {  
    console.log("here");
    let formData = new FormData();  
    formData.append('upload', this.files[0])  
  console.log(this.files[0]);
  
    this.service.UploadExcel(formData).subscribe(result => {  
      this.message = result.toString();  
      console.log(this.message);
      //this.loadAllUser();  
    });
    
    this.service.UploadExcelE(formData).subscribe(result => {  
      this.message = result.toString();  
      console.log(this.message);
      //this.loadAllUser();  
    }); 
  
  } 




}
