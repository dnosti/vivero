import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./admin/shared/authentication.service";
import { HttpServiceService } from './http-service.service';
import { Sensores } from './sensores';
import { Configvalores } from './configvalores';
import { Registros } from './registros';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [ AuthenticationService, ]
})

export class AppComponent implements OnInit {
  title = 'frontend';
  config: any;
  fullpage_api: any;
  slideSection: boolean = false;
  sensores: Array<Sensores>;
  configvalores: Array<Configvalores>;
  registros: Array<Registros>;
 
  constructor(private service: HttpServiceService) {
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: null,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
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

  showDataSensores() {
    this.service.getDataSensores()
      .subscribe((data_sensores: Array<Sensores>) => this.sensores = data_sensores);
  }

  showDataConfig() {
    this.service.getDataConfig()
      .subscribe((data_config: Array<Configvalores>) => this.configvalores = data_config);
  }

  showDataRegistros() {
    this.service.getDataRegistros()
      .subscribe((data_registros: Array<Registros>) => this.registros = data_registros)
  }

  ngOnInit() {
    this.showDataConfig();
    this.showDataRegistros();
  }  
}
