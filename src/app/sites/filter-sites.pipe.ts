import { Pipe, PipeTransform } from '@angular/core';
import { Site } from './sites.service';

@Pipe({
  name: 'filterSites'
})
export class FilterSitesPipe implements PipeTransform {

  transform(sites: Site[], filter: string): Site[] {
    if (filter) {
      return sites.filter(site => {
        return site.address.includes(filter) || site.name.includes(filter)
      })
    } else {
      return sites
    }
  }
}
