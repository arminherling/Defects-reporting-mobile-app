import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RESTServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RESTServiceProvider 
{
  apiUrl = 'https://gossens.eu/doener/api/hw_barcodes';

  constructor(public http: Http) 
  {
    console.log('Hello RESTServiceProvider Provider');
  }
  
  loadOne(id: String){
    var url = this.apiUrl + "?hwbc_barcode=eq." + id;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  loadAll(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  saveNewDevice(){
    return new Promise((resolve, reject) => {
      // todo set body
      this.http.post(this.apiUrl, "").subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
