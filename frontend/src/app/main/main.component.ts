import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/http-service.service';
import { Sensores } from 'src/sensores';
import { Configvalores } from 'src/configvalores';
import { Registros } from 'src/registros';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sensores: Array<Sensores>;
  configvalores: Array<Configvalores>;
  registros: Array<Registros>;

  temperatura: boolean = true;
  humedad: boolean = false;
  luz: boolean = false;
  co2: boolean = false;
  tabla: boolean = false;
  
  constructor(private service: HttpServiceService) {
    this.service.getDataSensores()
      .subscribe((data_sensores: Array<Sensores>) => this.sensores = data_sensores);
    this.service.getDataConfig()
      .subscribe((data_config: Array<Configvalores>) => this.configvalores = data_config);
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

  showTemp() {
    this.temperatura = true;
    this.humedad = false;
    this.luz = false;
    this.co2 = false;
    this.tabla = false;
  }

  showHum() {
    this.temperatura = false;
    this.humedad = true;
    this.luz = false;
    this.co2 = false;
    this.tabla = false;
  }

  showLuz() {
    this.temperatura = false;
    this.humedad = false;
    this.luz = true;
    this.co2 = false;
    this.tabla = false;
  }

  showCo2() {
    this.temperatura = false;
    this.humedad = false;
    this.luz = false;
    this.co2 = true;
    this.tabla = false;
  }

  showTabla() {
    this.temperatura = false;
    this.humedad = false;
    this.luz = false;
    this.co2 = false;
    this.tabla = true;
  }

}
