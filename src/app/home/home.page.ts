import { Component } from '@angular/core';
import { AuthInterface } from '../_models/auth.interface';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  errorMessage = '';
  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'pattern', message: 'Password must be at least 5 char.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private storage:Storage
  ) { 

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  loginUser(value) {
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      
      let db = firebase.firestore()
      let docRef = db.collection("userProfile").doc(res)
      docRef.get().then(userData =>{
        this.storage.set("dataUser",userData.data())    
        if (userData.data().type == 'f') {
            this.navCtrl.navigateForward('/order');
        } else {
            this.navCtrl.navigateForward('/cusrequst');
        }
      })
      this.errorMessage = '';
    }, err => {
      this.errorMessage = err.message;
    });
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }
  goToRegister2Page() {
    this.navCtrl.navigateForward('/register2');
  }

  registerModal(){
    
  }

  resetPassword(){
    console.log("test");
    
  }

}
