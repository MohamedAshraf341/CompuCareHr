import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leaveSearch'
})
export class LeaveSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(leaves => {
        if(leaves.Name || leaves.Alis || leaves.Issub || leaves.AcceptVac ){
          if(leaves.Name.search(searchText) !== -1 || leaves.Alis.search(searchText) !== -1||leaves.Issub.search(searchText) !== -1 || leaves.AcceptVac.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
