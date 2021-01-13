import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinalDir'
})
export class CardinalDirectionsPipe implements PipeTransform {
  transform(value: number, type: 'lat' | 'lng'): string {
    if (type === 'lat') {
      return  value >= 0 ? `${value} N` : `${value} S`
    } else {
      return  value >= 0 ? `${value} E` : `${value} W`
    }
  }
}
