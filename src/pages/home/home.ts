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
  data: any;
  selectedProduct: any;
  productFound:boolean = false;

  // All room types
  roomName: String = "";
  currentDate: String = new Date().toISOString(); 
  teacherName: String = "";
  furnitureMissing: Boolean = false;
  blackboardMissing: Boolean = false;
  ohpMissing: Boolean = false;
  beamerMissing: Boolean = false;
  windowMissing: Boolean = false;
  roomDirty: Boolean = false;

  // Rooms with computers
  printerBroken: Boolean = false;
  computerNumber: String = "";
  screenNumber: String = "";
  keyboardNumber: String = "";
  mouseNumber: String = "";
  deviceMissingString: String = "";
  otherDefects: Boolean = false;
  otherDefectsString: String = "";

  constructor(
    public navCtrl: NavController, 
    public restProvider: PeopleServiceProvider,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast
  ) {
  }

  loadOneRestData( id: String ){
    console.log("load one rest data");
    this.restProvider.loadOne(id)
    .then(data => {
      this.data = data;
      console.log(this.data);
    });
    console.log("end of one rest data");
  }

  loadAllRestData() {
    this.restProvider.loadAll()
    .then(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  sendData(){
    this.loadAllRestData();
  }

  scan(){
    console.log("start scanning");
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Scanned Barcode ID: " + barcodeData.text);
      this.loadOneRestData(barcodeData.text);
      this.fillInputFromData(barcodeData);
    });
  }

  fillInputFromData(data ){
    console.log("a");
    console.log(data);
    this.roomName = data[0].hwbc_raum;
    this.computerNumber = data[0].hwbc_geraetenr;
  }
}


    //   this.selectedProduct = this.data.find(product => product.hwbc_barcode === barcodeData.text);
    //   console.log(this.selectedProduct);
    //   if(this.selectedProduct !== undefined){
    //     this.productFound = true;
    //     console.log("Product found: " + barcodeData.text);

        

    //   } else {
    //     this.productFound = false;
    //     console.log("Product not found: " + barcodeData.text);        
    //     this.toast.show('Product not found', '5000', 'center').subscribe(
    //       toast => {
    //         console.log(toast);
    //       }
    //     );
    //   }
    // }, (err) => {
    //   this.toast.show(err, '5000', 'center').subscribe(
    //     toast => {
    //       console.log(toast);
    //     }
    //   );
    // });
  // }
// }
