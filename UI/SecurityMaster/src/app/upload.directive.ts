import { Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  constructor() { }

  @HostListener('dragover',['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropogation();

    console.log('Drag Over');
  }

  @HostListener('dragleave',['$event']) onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropogation();

    console.log('Drag Leave');
  }

  @HostListener('drop',['$event']) ondrop(evt) {
    evt.preventDefault();
    evt.stopPropogation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if(files.length > 0){
      console.log('you dropped ${files.length} files');
    }
  }

}
