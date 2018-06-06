import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RESTServiceProvider } from '../../providers/rest-service/rest-service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any; // todo this is used for debugging, remove when done with the project
  // selectedProduct: any;
  // productFound:boolean = false;

  // All room types
  roomName: String = "";
  currentDate: String = new Date().toISOString(); 
  teacherName: String = "";
  deviceNumber: String = "";
  deviceType: String = "";
  defectDescription: String = "";
  barcodeID: String = "";

  debugViewEnabled: Boolean = true;
  deviceFoundInDatabase?: Boolean = null;
  // furnitureMissing: Boolean = false;
  // blackboardMissing: Boolean = false;
  // ohpMissing: Boolean = false;
  // beamerMissing: Boolean = false;
  // windowMissing: Boolean = false;
  // roomDirty: Boolean = false;

  // // Rooms with computers
  // printerBroken: Boolean = false;
  // computerNumber: String = "";
  // screenNumber: String = "";
  // keyboardNumber: String = "";
  // mouseNumber: String = "";
  // deviceMissingString: String = "";
  // otherDefects: Boolean = false;
  // otherDefectsString: String = "";

  constructor(
    public navCtrl: NavController, 
    public restProvider: RESTServiceProvider,
    private barcodeScanner: BarcodeScanner
  ) {
  }

  loadOneRestData( id: String ){
    console.log("loading rest data for " + id);
    this.restProvider.loadOne(id)
    .then(data => {
      this.data = data;
      this.deviceFoundInDatabase = (data[0] !== undefined);
      if(this.deviceFoundInDatabase){
        this.fillInputFromData(data[0]);
      }
      else{
        this.resetInputVariables();
        this.barcodeID = id;
      }
    });
    console.log("end of one rest data");
  }

  // remove after done with project
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

  sendNewDevice(){
    console.log("a");
  }

  scan(){
    console.log("start scanning");
    // this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log("Scanned Barcode ID: " + barcodeData.text);
      this.loadOneRestData(barcodeData.text);
      // this.fillInputFromData(this.data);
    });
  }

  fillInputFromData(data ){
    this.roomName = data.hwbc_raum;
    this.deviceNumber = data.hwbc_geraetenr;
    this.deviceType = data.hwbc_geraetetyp;
    this.barcodeID = data.hwbc_barcode;
  }

  resetInputVariables(){
    this.roomName = "";
    this.deviceNumber = "";
    this.deviceType = "";
    this.barcodeID = "";
    this.defectDescription = "";
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
