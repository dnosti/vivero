import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  config: any;
  fullpage_api: any;

  verdadero: boolean = false;

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

  estadoActual(valor: boolean) {
    this.verdadero = valor;
    console.log(this.verdadero);
  }

  ngOnInit() {
  }

}
