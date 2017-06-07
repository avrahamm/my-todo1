import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Up'
})
export class UpPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
