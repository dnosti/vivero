import { Component } from '@angular/core';
import {AuthenticationService} from "./admin/shared/authentication.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [ AuthenticationService, ]
})
export class AppComponent {
  title = 'frontend';
  config: any;
  fullpage_api: any;

  slideSection: boolean = false;
 
  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: null,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  slideSectionTrue() {
    this.slideSection = true;
  }

  slideSectionFalse() {
    this.slideSection = false;
  }

}
