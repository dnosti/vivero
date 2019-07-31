import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { LoginObject } from "./shared/login-object.model";
import { AuthenticationService } from "./shared/authentication.service";
import { StorageService } from "../core/services/storage.service";
import { Router } from "@angular/router";
import { Session } from "../core/models/session.model";
import { AuthorizatedGuard } from "../core/guards/authorizated.guard";
import { HttpServiceService } from '../http-service.service';
import { Configvalores } from '../configvalores';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  activo: boolean = this.isActive();
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
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;
  
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private authorizatedGuard: AuthorizatedGuard,
              private service: HttpServiceService,
              private router: Router) {
    this.service.getDataConfig().subscribe((data: Configvalores) =>         
    this.configForm.setValue(data));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body)
      )
    }
  }

  private correctLogin(data: Session){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/admin_']);
  }

  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
    this.router.navigate(['/admin_']);
  }

  isActive(): boolean {
    if(this.authorizatedGuard.canActivate()) {
      return true;
    }
    return false;
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
}