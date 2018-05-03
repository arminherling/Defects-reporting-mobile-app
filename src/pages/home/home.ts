import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentDate: String = new Date().toISOString(); 
  data: any;
  selectedProduct: any;
  productFound:boolean = false;

  roomName: String;
  teacherName: String;
  
  constructor(
    public navCtrl: NavController, 
    public restProvider: PeopleServiceProvider,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast
  ) {
    this.loadAllRestData();
  }

  loadAllRestData() {
    this.restProvider.loadAll()
    .then(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  scan(){
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Scanned Barcode ID: " + barcodeData.text);
      this.selectedProduct = this.data.find(product => product.hwbc_barcode === barcodeData.text);
      if(this.selectedProduct !== undefined){
        this.productFound = true;
        console.log("Product found: " + barcodeData.text);
      } else {
        this.productFound = false;
        console.log("Product not found: " + barcodeData.text);        
        this.toast.show('Product not found', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}
