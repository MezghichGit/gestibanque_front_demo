import { Routes } from '@angular/router';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { ListeBanqueComponent } from './liste-banque/liste-banque.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateBanqueComponent } from './update-banque/update-banque.component';

export const routes: Routes = [

  {
    path:"addBanque",
    component:AddBanqueComponent
  },
  {
    path:"listBanque",
    component:ListeBanqueComponent
  }
  ,
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"updateBanque/:id",
    component:UpdateBanqueComponent
  }


];
