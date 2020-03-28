import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDbService } from 'appdj';
import { Observable } from 'rxjs';	
import { Osoba } from "../osoba";
// import { Objekt } from './objekti/objekt';  
	   
@Injectable({
  providedIn: 'root'
})
export class KwpService implements InMemoryDbService {
	  
   public createDb() {
    const osobe = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Petar' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Ana' },
      { id: 5, name: 'Mirko' }     
    ]; 
    return {osobe};
   } 
  
   public metoda(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  }   
  
  // public getObjekt(): Observable<objekt> 
  // {
     // const url = 'http://localhost:4200/';
     // return this.http.get<objekt>(url);
  // }
}
