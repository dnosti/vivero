/**
 * Es la clase básica que nos limita el acceso a un componente mediante una ruta.
 * Para ello debemos comprobar que el usuario se esté logueado al sistema utilizando
 * el StorageService, si eso es correcto, permitimos el acceso al componente,
 * en caso negativo se le redirecciona al Login.
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {StorageService} from "../services/storage.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate() {
    console.log(this.storageService.isAuthenticated());
    if (this.storageService.isAuthenticated()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to main page
    this.router.navigate(['']);
    return false;
  }
}
