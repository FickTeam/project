import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  dismissProfilerepaiman(){
    this.navCtrl.navigateForward("/profilerepairman")
  }
  dismissGoogleforshop(){
    this.navCtrl.navigateBack("/googleforshop")
  }

}
