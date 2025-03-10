import { Component } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-by-county-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-county-page.component.html',
})
export class ByCountyPageComponent {}
