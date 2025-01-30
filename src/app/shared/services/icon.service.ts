import { Injectable } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faChartLine,
  faGear,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(library: FaIconLibrary) {
    this.registerIcons(library);
  }

  private registerIcons(library: FaIconLibrary): void {
    library.addIcons(
      faHome,
      faBell,
      faChartLine,
      faGear,
      faUser
    );
  }
}
