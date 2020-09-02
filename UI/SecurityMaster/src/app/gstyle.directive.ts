import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGstyle]'
})
export class GstyleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color='green'
   }

}
