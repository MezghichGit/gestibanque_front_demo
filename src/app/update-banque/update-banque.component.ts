import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BanqueService } from '../services/banque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update-banque',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-banque.component.html',
  styleUrl: './update-banque.component.css'
})
export class UpdateBanqueComponent implements OnInit{

  public id: any;
  public nom: any;
  public adresse: any;
  public banqueToUpdate: any;

  constructor(private service: BanqueService, private router: Router, private route: ActivatedRoute) { }
  // 1) on va récupere l'id depuis la route
  // 2) on va récupérer l'objet Banque depuis le backend
  // 3) on va charger le formulaire d'update
  // 4) on poster vers le back la banque mise à jour

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);

        this.service.getBanque(this.id).subscribe(
          (response: any) => {
          //  console.log(response);
            this.nom = response["nom"];
            this.adresse = response["adresse"];
            //console.log(this.banqueToUpdate);
          }
        );

      }
    );

    // this.initFormUpdateProvider(myform);
  }


  updateBanque() {

    this.banqueToUpdate ={
       'nom': this.nom,
       'adresse': this.adresse,
       'id': this.id
     }
     this.service. updateBanque(this.banqueToUpdate).subscribe(
       response => {
         //console.log(response);
         this.router.navigate(['listBanque']);
       }
     );




  }
}
