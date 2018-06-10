import { Pipe, PipeTransform } from '@angular/core';
import { TaskQuery } from '../enums/task-query.enum';

@Pipe({
  name: 'query'
})
export class QueryPipe implements PipeTransform {

  transform(value: any): any {
    switch(value) {
      case TaskQuery.NONE:
        return 'None';
      case TaskQuery.DUE:
        return 'Due';
    }
  }

}
