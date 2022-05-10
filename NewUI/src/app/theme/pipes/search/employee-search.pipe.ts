import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(employee => {
        if( employee.EmpCode || employee.EmpName || employee.Birth ){
          if( employee.EmpCode.search(searchText) !== -1 || employee.EmpName.search(searchText) !== -1 || employee.Birth.search(searchText) !== -1 ){
            return true;
          }
        }
      });
    }
  }

}
