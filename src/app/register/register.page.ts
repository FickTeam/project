import { Component, OnInit } from '@angular/core';    
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  errorMessage = '';
  successMessage = '';
  base64Image:any = "assets/icon/user.png"
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
    private alertController: AlertController,    
    private camera: Camera

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fName: new FormControl(''),
      idCard: new FormControl(''),
      birthDay: new FormControl(''),
      tel: new FormControl(''),
      type: new FormControl('y'),
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

  dismissRegister() {
    this.navCtrl.navigateBack('');
  }

  tryRegister(value) {
    console.log(typeof(value))
    this.authService.register(value)
     .then(res => {
       console.log(res);
       if(res){
        delete value['password'];
        value['uid'] = res
        value['base64Image'] = this.base64Image
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
  takeGallery(){
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
        console.log(err);
        
       // Handle error
      });
    // console.log("ถ่ายรูป");
    
  }


}
