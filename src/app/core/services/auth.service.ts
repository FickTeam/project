import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { RegisterInterface } from '../models/register.interface';
import { AuthInterface } from '../models/auth.interface';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/storage';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public base64Image:string

  private userCollection: AngularFirestoreCollection<any>;
  constructor(
    private afs: AngularFirestore,
  ) { 
    this.userCollection = this.afs.collection<any>('userProfile');
  }

register(value) {
  return new Promise<any>((resolve, reject) => {    
    firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
    .then(
      (res) => resolve(res.user.uid),
      (err) => reject(err)
    );
  });

}

loginUser(value: AuthInterface) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
       .then(
         (res) => resolve(res.user.uid),
         (err) => reject(err)
       );
          
    });
}

logoutUser() {
  return new Promise<any>((resolve, reject) => {
    const getCurrentUser = firebase.auth().currentUser;
      
    if(getCurrentUser) {
      firebase.auth().signOut()
      .then(() => resolve())
      .catch((error) => reject());

    }
  });
}

updateProfile(data){  
  let db = firebase.firestore()
  var storageRef = firebase.storage().ref(`photo/${data.base64Image}`)
  // storageRef.put(data.base64Image).snapshot.ref.getDownloadURL().then(dataImageURL =>{
  //   data['imageURL'] = dataImageURL
  // })
  return db.collection('userProfile').doc(data.uid).set({
    email: data.email,
    fName : data.fName,
    idCard : data.idCard,
    birthDay: data.birthDay,
    tel : data.tel,
    type : data.type,
    uid : data.uid,
    report:[],
    imageProfile:data.imageProfile
    // img:  data.imageURL
})
}





updateProfileRepairman(data){  
  let db = firebase.firestore()

    return db.collection('userProfile').doc(data.uid).set({
    email: data.email,
    fName : data.fName,
    idCard : data.idCard,
    birthDay: data.birthDay,
    tel : data.tel,
    type : data.type,
    uid : data.uid,
    // img : data.imageURL,
    history:[]
    ,report:[],
    imageProfile:data.imageProfile

})
}
}