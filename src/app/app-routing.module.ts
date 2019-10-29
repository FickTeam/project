import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'cusrequst', loadChildren: './cusrequst/cusrequst.module#CusrequstPageModule' },
  { path: 'cusrequst', loadChildren: './cusrequst/cusrequst.module#CusrequstPageModule' },
  { path: 'repairman/:data/:data1/:data2/:data3/:data4', loadChildren: './repairman/repairman.module#RepairmanPageModule' },
  { path: 'register2', loadChildren: './register2/register2.module#Register2PageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' },
  { path: 'googlemapforshop', loadChildren: './googlemapforshop/googlemapforshop.module#GooglemapforshopPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
