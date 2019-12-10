import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportrepairmanPage } from './reportrepairman.page';

const routes: Routes = [
  {
    path: '',
    component: ReportrepairmanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportrepairmanPage]
})
export class ReportrepairmanPageModule {}
