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
  
  loadOneData(id: String){
    var url = this.apiUrl + "?hwbc_barcode=eq." + id;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  loadAllData(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  addNewData(roomName: String, deviceNumber: String, deviceType: String, barcodeID: String){
    return new Promise((resolve, reject) => {
      let randomId = Math.floor(Math.random()*1000000000)+1;
      console.log(randomId);
      // using a random id because using null doesnt really work
      let body = 
      { hwbc_id: randomId,
        hwbc_barcode: barcodeID,
        hwbc_raum: roomName,
        hwbc_geraetenr: deviceNumber, 
        hwbc_geraetetyp: deviceType}
      this.http.post(this.apiUrl, body).subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}
