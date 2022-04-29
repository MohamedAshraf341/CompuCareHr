import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companySearch'
})
export class CompanySearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(company => {
        if(company.Arname || company.Enname){
          if(company.Arname.search(searchText) !== -1 || company.Enname.search(searchText) !== -1){
            return true;
          }
        }
      });
    }
  }
}
