import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import * as firebase from 'firebase/app';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-reportcustomer',
  templateUrl: './reportcustomer.page.html',
  styleUrls: ['./reportcustomer.page.scss'],
})
export class ReportcustomerPage implements OnInit {
  reportcustomer:any

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController, private storage:Storage
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
            reportcustomer:this.reportcustomer,
          }
          )
      }).then(data =>{
        
        this.navCtrl.navigateBack("/badcondition");


      })
    })
  }
    

gotobadcondition() {
  this.navCtrl.navigateBack("/badcondition");
}

}
