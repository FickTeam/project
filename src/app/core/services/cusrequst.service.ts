import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { RegisterInterface } from '../models/register.interface';
import { AuthInterface } from '../models/auth.interface';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CusrequstsService {
  private userCusrequsts: AngularFirestoreCollection<any>;
  constructor(
    private afs: AngularFirestore
  ) { 
    this.userCusrequsts = this.afs.collection<any>('cusrequsts');
  }

updateCusrequsts(data: any):Promise<DocumentReference>{
  return this.userCusrequsts.add(data);
} 
}