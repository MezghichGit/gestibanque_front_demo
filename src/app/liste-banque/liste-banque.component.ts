import { Component, OnInit } from '@angular/core';
import { BanqueService } from '../services/banque.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-banque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-banque.component.html',
  styleUrl: './liste-banque.component.css'
})
export class ListeBanqueComponent implements OnInit {
  banques: any;
  constructor(private banqueService: BanqueService, private router: Router) {
  }

  ngOnInit(): void {
    //prepare les data

    this.refreshData();
  }

  deleteBanque(banque: any) {
    //alert(banque.nom);

    this.banqueService.deleteBanque(banque).subscribe(

      response => {
        alert("Suppresion avec succès");
        this.refreshData();
      },

      error => console.log(error + "Problème dans l'api")
    );
  }

  refreshData() {
    this.banqueService.getBanques().subscribe(

      response => this.banques = response,

      error => console.log(error + "Problème dans l'api")
    );
  }
}
