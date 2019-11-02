import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListdataforshopService {
  private listdataforshop :any

  constructor(private afs: AngularFirestore) { 
    this.listdataforshop = this.afs.doc('userPorfile/6x2yRDULp1bqyWlr2baY')

  }
  readDataRepairInvoiced(){
   return this.listdataforshop
  }
}
