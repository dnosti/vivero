/**
 * Este servicio permite comunicarnos con el servidor para hacer login
 * a través de una petición HTTP (Post) enviando un nombre de usuario
 * y una contraseña. Se tiene que pasar por constructor el Http de
 * Angular para ejecutar las peticiones. La petición de login nos
 * devolverá un observable de tipo Session que almacenaremos después.
 * El logout nos devolverá un observable de tipo Boolean.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginObject} from "./login-object.model";
import {Session} from "../../core/models/session.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.basePath + 'login', loginObj);
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
  }
}
