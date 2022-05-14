import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userroleSearch'
})
export class UserroleSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(UserSystems => {
        if(  UserSystems.UserName ||UserSystems.id ){
          if( UserSystems.UserName.search(searchText) !== -1 || UserSystems.id.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
