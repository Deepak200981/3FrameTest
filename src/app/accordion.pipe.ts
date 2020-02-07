import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accordion'
})
export class AccordionPipe implements PipeTransform {

  transform(value: any, inputemail: string): any {
    if (value && value.length && inputemail) {
      return value.filter((detail: any) => {
        return detail.email.toLowerCase().includes(inputemail.toLowerCase());
      });
    } else {
      return value;
    }
  }

}
