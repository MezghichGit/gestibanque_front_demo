import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-banque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-banque.component.html',
  styleUrl: './add-banque.component.css'
})
export class AddBanqueComponent {


  createBanque(formAddBanque:any){
    console.log(formAddBanque.value);
  }
}
