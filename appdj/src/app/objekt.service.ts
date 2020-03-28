import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjektService {
  public id: number;
  public ime: string;
  public prezime: string;	
  public iq: number;
  public t: number;

  constructor(id:number, ime:string, prezime:string,iq:number,t:number) {
	this.id = id;
    this.ime = ime;
    this.prezime = prezime;
    this.iq = iq;
	this.t = t;
  }
}
