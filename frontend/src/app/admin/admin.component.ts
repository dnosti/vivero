import { Component, OnInit } from '@angular/core';
import { Configvalores } from 'src/configvalores';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from 'src/http-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  configuracion: Array<Configvalores>;
  
  configForm = new FormGroup({
    vent: new FormControl(),
    inund: new FormControl(),
    temp_max: new FormControl(),
    temp_min: new FormControl(),
    hum_max: new FormControl(),
    hum_min: new FormControl(),
    luz_max: new FormControl(),
    luz_min: new FormControl(),
    co2_max: new FormControl(),
    co2_min: new FormControl(),
  })

  constructor(private service: HttpServiceService) {
    this.service.getDataConfig().subscribe((data: Configvalores) =>         
    this.configForm.setValue(data));
  }

  updateConfig() {
    let vent = this.configForm.get("vent").value;
    let inund = this.configForm.get("inund").value;
    let temp_max = this.configForm.get("temp_max").value;
    let temp_min = this.configForm.get("temp_min").value;
    let hum_max = this.configForm.get("hum_max").value;
    let hum_min = this.configForm.get("hum_min").value;
    let luz_max = this.configForm.get("luz_max").value;
    let luz_min = this.configForm.get("luz_min").value;
    let co2_max = this.configForm.get("co2_max").value;
    let co2_min = this.configForm.get("co2_min").value; 
    this.service.updataDataConfig(vent, inund, temp_max, temp_min, hum_max,
      hum_min, luz_max, luz_min, co2_max, co2_min).subscribe((data: Configvalores) =>  
        this.configForm.setValue(data)
        /*this.configForm.reset()*/
       )
  }

  ngOnInit() {
  }
}
