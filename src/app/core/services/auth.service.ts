import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { RegisterInterface } from '../models/register.interface';
import { AuthInterface } from '../models/auth.interface';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public base64Image:string

  private userCollection: AngularFirestoreCollection<any>;
  constructor(
    private afs: AngularFirestore,
    private camera: Camera,
    private transfer: FileTransfer
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
userDetails() {
 
}

updateProfile(data){  
  let db = firebase.firestore()
  return db.collection('userProfile').doc(data.uid).set({
    email: data.email,
    fName : data.fName,
    idCard : data.idCard,
    birthDay: data.birthDay,
    tel : data.tel,
    type : data.type,
    uid : data.uid
   
  })
}


takePhoto(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    
    }, (err) => {
     // Handle error
    });
  // console.log("ถ่ายรูป");
  
}
uploadFile() {
 
    // const fileTransfer: FileTransferObject = this.transfer.create();
    // let options: FileUploadOptions = {
    //   fileKey: 'image',
    //   chunkedMode: false,
    //   mimeType: "multipart/from-data",
    // }
    // fileTransfer.upload(this.base64Image, 'http://203.154.117.72:13000/User/profile', options)
    //   .then((data) => {
    //  console.log(data)  
    // }, (err) => {
    // console.log(err)
    // });
  }

updateProfileRepairman(data){  
  let db = firebase.firestore()
  var metadata = {
    contentType: 'image/jpeg'
  };
  var storage = firebase.storage().ref(`photo/${this.base64Image}`)

  // var uploadTask = storage.child('images/' + file.name).put(file, metadata);

  return db.collection('userProfile').doc(data.uid).set({
    email: data.email,
    fName : data.fName,
    idCard : data.idCard,
    birthDay: data.birthDay,
    tel : data.tel,
    type : data.type,
    uid : data.uid,
    history:[]
  })
}
}