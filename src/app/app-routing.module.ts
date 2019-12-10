import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'cusrequst', loadChildren: './cusrequst/cusrequst.module#CusrequstPageModule' },
  { path: 'cusrequst', loadChildren: './cusrequst/cusrequst.module#CusrequstPageModule' },
  { path: 'register2', loadChildren: './register2/register2.module#Register2PageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' },
  { path: 'googlemapforshop/:data', loadChildren: './googlemapforshop/googlemapforshop.module#GooglemapforshopPageModule' },
  { path: 'profilecustomer', loadChildren: './profilecustomer/profilecustomer.module#ProfilecustomerPageModule' },
  { path: 'profilerepairman', loadChildren: './profilerepairman/profilerepairman.module#ProfilerepairmanPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
  { path: 'badcondition', loadChildren: './badcondition/badcondition.module#BadconditionPageModule' },  { path: 'reportcustomer', loadChildren: './reportcustomer/reportcustomer.module#ReportcustomerPageModule' },
  { path: 'reportrepairman', loadChildren: './reportrepairman/reportrepairman.module#ReportrepairmanPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
