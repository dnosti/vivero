import { Time } from '@angular/common';

export class Registros {
    constructor(public ventilacion: boolean, public inundacion: boolean,
        public temperatura: number, public humedad: number,
        public luz: number, public co2: number, 
        public localTime: Time, public localDate: Date, public id: number) {}
}
