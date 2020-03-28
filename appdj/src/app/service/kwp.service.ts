import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';	
import { Osoba } from "../osoba";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
	   
@Injectable({
  providedIn: 'root'
})

export class KwpService {
	    
 public metoda() {	
	const db = [
		{ id: 1, ime: 'Ivan', prezime: 'Ivanić', iq: 100, t: 105, email: 'ivan.ivanic10@imail.com' },
		{ id: 2, ime: 'Pero', prezime: 'Perić', iq: 105, t: 110, email: 'pero.peric15@email.com' },
		{ id: 3, ime: 'Zoran', prezime: 'Zorić', iq: 110, t: 115, email: 'zoran.zoric11@amail.com' },
		{ id: 4, ime: 'Ana',  prezime: 'Perina', iq: 115, t: 120, email: 'ana.perina20@imail.com' },
		{ id: 5, ime: 'Mirko',  prezime: 'Golubić', iq: 125, t: 135, email: 'mirko.golubic35@imail.com' }];    
	let osoba1 = { id: 1, ime: 'Mirko', prezime: 'Perić', iq: 100, t:105, email:'mirko.peric1@omail.com' };
	let osoba2 = { id: 2, ime: 'Ivan', prezime: 'Zorić', iq: 120, t:125, email:'ivan.zoric2@imail.com' };
	let osobe = [ osoba1, osoba2 ];
    let result = 0;
   
	let osobaIq = [ 100, 105, 110, 115, 120 ]
	
	// const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter( v => v % 2 === 0));
	// const iq = Observable<number[]> = of( osobaIq).pipe(filter( x => x >100 )), map( x => x.length ));;
	// return osoba1["ime"]; 
	const iq = osoba1["ime"];
	// return iq; 
	
	let returnType = 'object';	
	// 'returnType` can be 'object' | 'observable' | 'promise'
	
	switch (returnType) {
      case ('observable'):
        return of(db).pipe(delay(10));
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
	
  }   
  
  // public getObjekt(): Observable<objekt> 
  // {
     // const url = 'http://localhost:4200/';
     // return this.http.get<objekt>(url);
  // }
}
