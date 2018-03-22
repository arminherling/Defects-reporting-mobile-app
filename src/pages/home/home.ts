import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  currentDate: String = new Date().toString(); 
  data: any;

  constructor(public navCtrl: NavController, public restProvider: PeopleServiceProvider) {
    this.loadRest();
  }

  loadRest() {
    this.restProvider.load()
    .then(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
