import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAccrodion]'
})
export class AccrodionDirective {

  @HostBinding('class.open')isToggel: boolean = false;
  constructor() { }

  @HostListener('click') toggle() {
    this.isToggel = !this.isToggel;
  }

}
