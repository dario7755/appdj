import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSortPipe'
})
export class DataSortPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
