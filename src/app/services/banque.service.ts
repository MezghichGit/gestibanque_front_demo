import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class BanqueService {


  constructor(private http:HttpClient) { }

  getBanques()
  {
     return this.http.get(environment.baseUrl+"banques/"); // consommation d'une api rest
  }

  addBanque(banque:any)
  {
     return this.http.post(environment.baseUrl+"banques/",banque); // consommation d'une api rest
  }

  deleteBanque(banque:any)
  {
     return this.http.delete(environment.baseUrl+"banques/"+banque.id); // consommation d'une api rest
  }

  getBanque(id:any)
  {
    console.log(id);
     return this.http.get(environment.baseUrl+"banques/"+id); // consommation d'une api rest
  }

  updateBanque(banque:any)
  {

     return this.http.put(environment.baseUrl+"banques/",banque); // consommation d'une api rest
  }
}
