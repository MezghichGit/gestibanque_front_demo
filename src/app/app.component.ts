import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal,Stagiaire } from './Models';
import { CommonModule } from '@angular/common';
import { StagiairesComponent } from "./stagiaires/stagiaires.component";
import { PostComponent } from "./post/post.component";
import { ListeBanqueComponent } from "./liste-banque/liste-banque.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, StagiairesComponent, PostComponent, ListeBanqueComponent, NavbarComponent]
})



export class AppComponent {
  title = 'ams';
  formateur = "Amine";
  names:string[] = ["ahmed","anne","teddy","pierre"];
  animals : Animal[] = [new Animal(1,"Chien",10,12), new Animal(2,"Chat",10,12),new Animal(3,"Poisson",1,12), new Animal(4,"Oiseau",1,2)];

  stagiaire1 = new Stagiaire("Darwiche","Ahmed","alexis@sfr.fr");
  stagiaire2 = new Stagiaire("Wakhsas","Abdelilah","abdelilah@sfr.fr");
  stagiaire3 = new Stagiaire("Nérin","Benoit","benoit@sfr.fr");
  stagiaire4 = new Stagiaire("Benarab","Fatima","fatima@sfr.fr");
  stagiaire5 = new Stagiaire("Dangning","Hu","hu@sfr.fr");

  stagiaires: Stagiaire[] =[this.stagiaire1,this.stagiaire2,this.stagiaire3,this.stagiaire4,this.stagiaire5];
}

