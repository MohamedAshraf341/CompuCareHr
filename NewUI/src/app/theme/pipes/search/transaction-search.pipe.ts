import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionSearch'
})
export class TransactionSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(transaction => {
        if(transaction.Empcode || transaction.Empname || transaction.Type ){
          if(transaction.Empcode.search(searchText) !== -1 || transaction.Empname.search(searchText) !== -1 || transaction.Type.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
