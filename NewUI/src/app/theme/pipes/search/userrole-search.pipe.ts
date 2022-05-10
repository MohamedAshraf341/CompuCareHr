import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userroleSearch'
})
export class UserroleSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(User => {
        if(User.id || User.UserName ){
          if(User.id.search(searchText) !== -1 || User.UserName.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
