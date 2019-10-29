import { Component, OnInit } from '@angular/core';    
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {
  form: FormGroup;
  errorMessage = '';
  successMessage = '';
 
  validationMessages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ]
 };
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fName: new FormControl(''),
      idCard: new FormControl(''),
      birthDay: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  loginModal() {
    this.navCtrl.navigateBack('');
  }

  dismissRegister2() {
    this.navCtrl.navigateBack('');
  }

  tryRegister2(value) {
    console.log(value)
    this.authService.register(value)
     .then(res => {
       console.log(res);
       if(res){
        delete value['password'];
        this.authService.updateProfile(value).then(()=>{
          this.errorMessage = '';
          this.successMessage = 'Your account has been created. Please log in.';
        },err =>{
          this.errorMessage = err.message;
          this.successMessage = '';
        })
      }
       this.presentAlertSuccess();
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = '';
       this.presentAlertError()
     });
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: this.errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'ลงทะเบียนสำเร็จ',
      message: this.errorMessage,
      buttons: [ {
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.navigateBack('');
        }
      }]
    });
    await alert.present();
  }


}
