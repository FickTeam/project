import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GooglemapforshopPage } from './googlemapforshop.page';

const routes: Routes = [
  {
    path: '',
    component: GooglemapforshopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GooglemapforshopPage]
})
export class GooglemapforshopPageModule {}
