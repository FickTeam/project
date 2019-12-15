import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { RegisterInterface } from '../models/register.interface';
import { AuthInterface } from '../models/auth.interface';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class CusrequstsService {
  private userCusrequsts: AngularFirestoreCollection<any>;
  dataUserStorage: any
  constructor(
    private afs: AngularFirestore, private storage: Storage
  ) {
    this.userCusrequsts = this.afs.collection<any>('cusrequsts');


  }

  updateCusrequsts(data) {
    let db = firebase.firestore()
    this.storage.get("dataUser").then(dataUser => {
      console.log(typeof (data.longtitude));
      let day = new Date().getDay()
      let month = new Date().getMonth()
      let year = new Date().getFullYear()
      return db.collection('userProfile').doc(dataUser.uid).update({
        repairinvoiced: {
          date: `${day+8}-${month+1}-${year}`,
          badcondition: data.breakDown,
          licenseplate: data.idCar,
          position: new firebase.firestore.GeoPoint(data.latitude, data.longtitude),
          status: "W"
          // W : wait ,A : approve , P : process , C : completed
        },
        repairPeople: {},
      });
    })

  }
}