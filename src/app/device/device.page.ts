import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  idCar:any
  breakDown:any
  price:any
  constructor(public navCtrl: NavController,private storage:Storage) { }

  ngOnInit() {
    let db = firebase.firestore()
    this.storage.get("dataUser").then(data =>{
      // db.collection("userProfile").doc(data.uid).collection("history").add()
    })
  }
}
