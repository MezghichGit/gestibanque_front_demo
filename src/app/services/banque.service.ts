import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private http:HttpClient) { }

  getBanques()
  {
     return this.http.get("http://127.0.0.1:8080/banques/"); // consommation d'une api rest
  }

  addBanque(banque:any)
  {
     return this.http.post("http://127.0.0.1:8080/banques/",banque); // consommation d'une api rest
  }

  deleteBanque(banque:any)
  {
     return this.http.delete("http://127.0.0.1:8080/banques/"+banque.id); // consommation d'une api rest
  }

  getBanque(id:any)
  {
    console.log(id);
     return this.http.get("http://127.0.0.1:8080/banques/"+id); // consommation d'une api rest
  }

  updateBanque(banque:any)
  {

     return this.http.put("http://127.0.0.1:8080/banques/",banque); // consommation d'une api rest
  }
}
