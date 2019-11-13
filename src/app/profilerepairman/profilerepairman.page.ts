import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-profilerepairman',
  templateUrl: './profilerepairman.page.html',
  styleUrls: ['./profilerepairman.page.scss'],
})
export class ProfilerepairmanPage implements OnInit {

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
  dismissOrder(){
    this.navCtrl.navigateBack("/order")
  }
  signup(data){

  }

}
