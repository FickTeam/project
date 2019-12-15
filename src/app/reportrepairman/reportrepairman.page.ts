import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { Storage } from "@ionic/storage";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-reportrepairman',
  templateUrl: './reportrepairman.page.html',
  styleUrls: ['./reportrepairman.page.scss'],
})
export class ReportrepairmanPage implements OnInit {
  reportrepairman:any

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private storage:Storage
  ) { }

  ngOnInit() {
  }

  sendDataToFireStore(){
    let db = firebase.firestore()
    this.storage.get("dataUser").then(data =>{
      let Qry = db.collection("userProfile").doc(data.uid)
      //update
      Qry.update({
        report: firebase.firestore.FieldValue.arrayUnion(
          {
            reportrepairman:this.reportrepairman,
          }
          )
      
    })
  })
}

  gotodevice() {
    this.navCtrl.navigateBack("/device");
}

}
