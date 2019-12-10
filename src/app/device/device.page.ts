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

  }
  sendDataToFireStore(){
    let db = firebase.firestore()
    this.storage.get("dataUser").then(data =>{
      let Qry = db.collection("userProfile").doc(data.uid)
      //update
      Qry.update({
        history: firebase.firestore.FieldValue.arrayUnion(
          {
            idCar:this.idCar,
            breakDown:this.breakDown,
            price:this.price
          }
          )
      })

      //update status "F"
      this.navCtrl.navigateForward("/order")

    })
  }

  dismissGoogleforshop(){
    this.navCtrl.navigateBack("/googlemapforshop")
  }
  dismissreportrepairman(){
    this.navCtrl.navigateForward("/reportrepairman")
  }

}
