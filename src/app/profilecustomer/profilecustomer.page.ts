import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilecustomer',
  templateUrl: './profilecustomer.page.html',
  styleUrls: ['./profilecustomer.page.scss'],
})
export class ProfilecustomerPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  dismissCusrequst(){
    this.navCtrl.navigateBack("/cusrequst")
  }
  signup(data){

  }

}
