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
  dataUserStorage:any
  constructor(
    private afs: AngularFirestore,private storage : Storage
  ) { 
    this.userCusrequsts = this.afs.collection<any>('cusrequsts');
    

  }

updateCusrequsts(data){
  let db = firebase.firestore()
  this.storage.get("dataUser").then(dataUser =>{
    console.log(typeof(data.longtitude));
    
    return db.collection('userProfile').doc(dataUser.uid).update({
      repairinvoiced :{
        badcondition:data.breakDown,
        gasline:data.refuel,
        licenseplate:data.idCar,
        position: new firebase.firestore.GeoPoint(data.latitude, data.longtitude)
      },
      repairPeople:{}
    })
  })

  } 
}