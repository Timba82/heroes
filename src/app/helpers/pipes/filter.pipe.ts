import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroe/hero';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: Hero[], filteringString: string, ...arg: string[]): Hero[] {
    if (value.length === 0 || !filteringString) {
      return value;
    }
    const resultArray = [];
    for (const spreadArgument of arg) {
      resultArray.push(
        value.filter((item) =>
          item[spreadArgument].toString().includes(filteringString)
        )
      );
    }
    return [].concat(...resultArray);
  }
}
