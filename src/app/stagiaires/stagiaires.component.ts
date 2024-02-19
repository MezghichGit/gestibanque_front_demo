import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MypipePipe } from "../mypipe.pipe";
import { StagiaireService } from '../services/stagiaire.service';


@Component({
  selector: 'app-stagiaires',
  standalone: true,
  templateUrl: './stagiaires.component.html',
  styleUrl: './stagiaires.component.css',
  imports: [CommonModule, MypipePipe]
})
export class StagiairesComponent implements OnInit {

  formateur: string = "Mohamed Amine MEZGHICH";
  logo: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhfJQZMxfTEgkCwULqbvcifmRV9CVpEjufFsf9xvKoQ&s";

  afficherMsg: boolean = true;
  msg:string="";
  users:any;
  // injection d'une dépendance : Sevice Stagiaire
  constructor(private serviceStagiaire: StagiaireService) {
    console.log("Constructeur");
  }
  ngOnInit(): void {
    //console.log("ngOnInit");
    this.msg = this.serviceStagiaire.getData();  //prepare les data

    this.serviceStagiaire.getUsers().subscribe(

      response=> this.users = response,

      error => console.log(error+"Problème dans l'api")
    );
  }


  greeting() {
    //alert("Bonjour mes chers étudiants!");
   // this.afficherMsg = !this.afficherMsg;

   alert(this.msg);
   console.log(this.users)
  }

  bye() {
    alert("A très Bientôt!");
  }
}
