import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';

declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc;

  constructor() { }

  // init() {
  //   console.log('security Initialisation ...');
  //   this.kc = new Keycloak({
  //     url: 'http://localhost:8080/auth/',
  //     realm: 'ecom-realm',
  //     clientId: 'AngularProductsApp'
  //   });
  //   this.kc.init({
  //     onLoad: 'check-sso',
  //     promiseType: 'native'
  //   }).then((authenticated) => {
  //     console.log(authenticated);
  //     console.log(this.kc.token);
  //   }, err => {
  //     console.log(err);
  //   });
  // }

  init() {
    return new Promise((resolve, reject)=>{
      console.log('security Initialisation ...');
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth/',
        realm: 'ecom-realm',
        clientId: 'AngularProductsApp'
      });
      this.kc.init({
        onLoad: 'check-sso',
        promiseType: 'native'
      }).then((authenticated) => {
        console.log(this.kc.token);
        resolve({auth: authenticated, token: this.kc.token});
      }).catch(err => {
        reject(err);
      });
    });
  }

}
