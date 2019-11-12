import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilerepairman',
  templateUrl: './profilerepairman.page.html',
  styleUrls: ['./profilerepairman.page.scss'],
})
export class ProfilerepairmanPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  dismissOrder(){
    this.navCtrl.navigateBack("/order")
  }
  signup(data){

  }

}
