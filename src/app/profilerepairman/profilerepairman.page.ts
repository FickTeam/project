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
  tel:any
  idCard:any
  history:any
  userProfile:any 
    ngOnInit() {
      let db = firebase.firestore()
     this.storage.get("dataUser").then(data =>{
      let datas =  db.collection("userProfile").doc(data.uid).get().then(data =>{
     this.fname = data.data().fName
     console.log(data.data())
     this.tel = data.data().tel
     console.log(data.data())
     this.idCard = data.data().idCard 
     console.log(data.data())
     this.history = data.data().history 
     
  
       })
      })
    }
  dismissOrder(){
    this.navCtrl.navigateBack("/order")
  }
  signup(data){
    console.log(this.fname);
    
    this.storage.get("dataUser").then(data =>{
      console.log(data.uid);
      
      let db =firebase.firestore();
     db.collection('userProfile').doc(data.uid).update({
       "fName":this.fname,
       "tel":this.tel,
       "idCard":this.idCard
     })

    })

     
  }

}