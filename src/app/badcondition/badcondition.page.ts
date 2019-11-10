import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Storage } from "@ionic/storage";




@Component({
  selector: 'app-badcondition',
  templateUrl: './badcondition.page.html',
  styleUrls: ['./badcondition.page.scss'],
})
export class BadconditionPage implements OnInit {
  name:any
  image :any
  tel:any
  constructor(public route:ActivatedRoute,public navCtrl: NavController,private storage:Storage){
   
    
    
  }



  ngOnInit() {
    let db = firebase.firestore()
    this.storage.get("dataUser").then(data =>{
     let datas =  db.collection("userProfile").doc(data.uid)
     datas.onSnapshot(doc=> {
 
              
              if (doc.data().repairinvoiced.status === "W") {
                document.getElementById('w').style.backgroundColor = "#FF3104"
              } else if(doc.data().repairinvoiced.status === "A"){                
                document.getElementById('w').style.backgroundColor = "#A9FA53"
                this.appove(doc.data())
                
              }else if(doc.data().repairinvoiced.status === "P"){
                document.getElementById('p').style.backgroundColor = "#A9FA53"
                document.getElementById('w').style.backgroundColor = "#A9FA53"

              }else if(doc.data().repairinvoiced.status === "F"){
                document.getElementById('p').style.backgroundColor = "#A9FA53"
                document.getElementById('w').style.backgroundColor = "#A9FA53"
                document.getElementById('f').style.backgroundColor = "#A9FA53"

              }

          });
         
    })
  }
  backtocusrequst(){
    this.navCtrl.navigateBack("/cusrequst")
  }
  
  dismissProfilecustomer(){
  this.navCtrl.navigateForward("/profilecustomer")
  }
  appove(data3){
    
    this.name = data3.repairPeople.fNameRepair
    this.tel = data3.repairPeople.fTelRepair

  }
}
