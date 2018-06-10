import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    return (value === 0)
      ? 'Pending'
      : 'Complete';
  }

}
