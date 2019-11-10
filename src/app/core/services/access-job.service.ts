import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AccessJOBService {

  constructor(private storage:Storage) { 

  }
  updateAccessJOB(data,fdata){

    console.log(data);
    console.log("<=====================>");
    console.log(fdata);
    
    
    let db = firebase.firestore()
      db.collection('userProfile').doc(data.uid).update({
        repairPeople :{
          fNameRepair:fdata.fName,
          fTelRepair : fdata.tel,
          fImgRepair:""

        },
        "repairinvoiced.status":"A"
      })
  }
}
