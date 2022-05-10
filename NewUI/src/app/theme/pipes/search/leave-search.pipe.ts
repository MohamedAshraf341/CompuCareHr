import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leaveSearch'
})
export class LeaveSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(Leave => {
        if (Leave.Name || Leave.Alis || Leave.Issub || Leave.AcceptVac) {
          if (Leave.Name.search(searchText) !== -1 || Leave.Alis.search(searchText) !== -1 || Leave.Issub.search(searchText) !== -1 || Leave.AcceptVac.search(searchText) !== -1) {
            return true;
          }

        }
      });
    }
  }

}
