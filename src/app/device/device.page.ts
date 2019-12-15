import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  idCar:any
  breakDown:any
  price:any
  dataUser:any
  constructor(public route:ActivatedRoute,public navCtrl: NavController,private storage:Storage,public router: Router) { }
  

  ngOnInit() {
    this.dataUser =  this.route.snapshot.params.data
    let data = JSON.parse(this.dataUser)    

this.idCar =data.repairinvoiced.licenseplate
  
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
      Qry.update({
        repairinvoiced:{}
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
