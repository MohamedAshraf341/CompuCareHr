import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicHoliday'
})
export class PublicHolidayPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(publicHoliday => {
        if(publicHoliday.Arname || publicHoliday.Enname || publicHoliday.Fdate || publicHoliday.Tdate){
          if(publicHoliday.Arname.search(searchText) !== -1 || publicHoliday.Enname.search(searchText) !== -1 || publicHoliday.Fdate.search(searchText) !== -1 || publicHoliday.Tdate.search(searchText) !== -1){
            return true;
          }
        }
      });
    }
  }

}
