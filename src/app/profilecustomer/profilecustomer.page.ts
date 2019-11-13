import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profilecustomer',
  templateUrl: './profilecustomer.page.html',
  styleUrls: ['./profilecustomer.page.scss'],
})
export class ProfilecustomerPage implements OnInit {

  constructor(public navCtrl: NavController , private storage:Storage) { }
fname:any
email:any
  ngOnInit() {
    let db = firebase.firestore()
    this.storage.get("dataUser").then(data =>{
     let datas =  db.collection("userProfile").doc(data.uid).get().then(data =>{
   this.fname = data.data().fName
   console.log(data.data())
   this.email = data.data().email 

     })
    })
  }
  dismissCusrequst(){
    this.navCtrl.navigateBack("/cusrequst")
  }
  signup(data){

  }

}
