import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UploadComponent} from './upload/upload.component';
import {DisplayComponent} from './display/display.component';
import {EquityComponent} from './equity/equity.component';
import {BondComponent} from './bond/bond.component';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {path:'upload',component:UploadComponent},
  
  {
    path:'display',
    component:DisplayComponent,
    children:[
      {path:'Equity',component:EquityComponent},
      {path:'bond',component:BondComponent},
      {path:'demo',component:DemoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
