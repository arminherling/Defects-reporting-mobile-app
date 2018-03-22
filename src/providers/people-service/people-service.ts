import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

  apiUrl = 'https://gossens.eu/doener/api/hw_barcodes';

  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }


}
