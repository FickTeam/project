import { Component, OnInit } from '@angular/core';
import { ListdataforshopService } from "../core/services/listdataforshop.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  userDoc:any =[]
  dataUserSecret : any =[]
  img:any
  constructor(private listdataforshopService :ListdataforshopService, private afs: AngularFirestore,
    public router: Router,public navCtrl: NavController
    ) { }

  ngOnInit() {

    let db = firebase.firestore()
    db.collection("userProfile").where("repairinvoiced", ">", {}).get().then(querySnapshot =>{
      querySnapshot.forEach((doc) => {
        console.log(doc);
        
        this.userDoc.push(doc.data())
        
      });
    }).catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  this.img = "../../assets//img/faceimg.jpg"
    console.log(this.userDoc);
    
  }
  sendData(data){
    let dataUser = JSON.stringify(data)
  this.router.navigate(['googlemapforshop',dataUser])
  }

  dismissHome(){
    this.navCtrl.navigateBack("/home")
 }

}