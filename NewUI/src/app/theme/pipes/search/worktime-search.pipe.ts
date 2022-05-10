import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'worktimeSearch'
})
export class WorktimeSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(worktime => {
        if( worktime.FromDate || worktime.ToDate ){
          if( worktime.FromDate.search(searchText) !== -1 || worktime.ToDate.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
