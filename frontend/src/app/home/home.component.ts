import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/shared/authentication.service';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
  providers: [ AuthenticationService ]
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public logout(): void{
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
  }
}
