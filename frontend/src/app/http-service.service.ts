import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  sensoresUrl = 'http://localhost:8080/vivero'
  configUrl = 'http://localhost:8080/conf'

  getDataSensores() {
    return this.http.get(this.sensoresUrl);
  }

  getDataConfig() {
    return this.http.get(this.configUrl);
  }

  updateDataConfig(vent: boolean, inund: boolean, temp_max: number, temp_min: number,
    hum_max: number, hum_min: number, luz_max: number, luz_min: number,
    co2_max: number, co2_min: number) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  constructor(private http: HttpClient) { }
}
