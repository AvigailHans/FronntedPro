import { Pipe, PipeTransform } from '@angular/core';
import { fail } from 'assert';
@Pipe({
  name: 'filterrr'
})
export class FilterrrPipe implements PipeTransform {

  transform(arr: any, searchVal?: any): any {
    var res = [];
    arr.forEach(element => {
      if (element.indexOf(searchVal) > -1) {
        res.push(element);
      }
    });
    return res;
  }

}

