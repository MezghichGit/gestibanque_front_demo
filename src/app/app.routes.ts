import { Routes } from '@angular/router';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { ListeBanqueComponent } from './liste-banque/liste-banque.component';

export const routes: Routes = [

  {
    path:"addBanque",
    component:AddBanqueComponent
  },
  {
    path:"listBanque",
    component:ListeBanqueComponent
  }

];
