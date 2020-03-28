import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class Rad1Service {
  constructor(private http: HttpClient) { }
  
  public metoda(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  } 
}
