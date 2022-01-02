import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alpha'
})
export class AlphaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
