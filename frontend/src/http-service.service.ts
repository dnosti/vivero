import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  sensoresUrl = 'http://localhost:8080/vivero'
  configUrl = 'http://localhost:8080/conf'
  registrosUrl = 'http://localhost:8080/registros'

  getDataSensores() {
    return this.http.get(this.sensoresUrl);
  }

  getDataConfig() {
    return this.http.get(this.configUrl);
  }

  getDataRegistros() {
    return this.http.get(this.registrosUrl);
  }

  async getDataRegistros2() {
    return await this.http.get(this.registrosUrl).toPromise();
  }
  updataDataConfig(vent: boolean, inund: boolean, temp_max: number,
    temp_min: number, hum_max: number, hum_min: number, 
    luz_max: number, luz_min: number, co2_max: number,
    co2_min: number) {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    return this.http.put(this.configUrl, {vent, inund, temp_max, temp_min,
    hum_max, hum_min, luz_max, luz_min, co2_max, co2_min}, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
