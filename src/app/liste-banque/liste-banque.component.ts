import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../services/banque.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-banque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-banque.component.html',
  styleUrl: './liste-banque.component.css'
})
export class ListeBanqueComponent implements OnInit{
  banques:any;
  constructor(private banqueService: BanqueService) {
  }

  ngOnInit(): void {
 //prepare les data

    this.banqueService.getBanques().subscribe(

      response=> this.banques = response,

      error => console.log(error+"Problème dans l'api")
    );
  }
}
