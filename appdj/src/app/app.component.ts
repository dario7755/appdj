import { Component, OnInit, Input, ViewChild } from '@angular/core'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pipe, PipeTransform } from "@angular/core";
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable, of, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Osoba } from "./osoba";

import { KwpService } from './service/kwp.service';

// povezivanje na bazu podataka
import { db } from "./utils/db";

declare var $;

const searchBox = document.getElementById('search-box');

const typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(() => ajax('/api/endpoint'))
);

typeahead.subscribe(data => {
 // Handle the data from the API
});

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:4200/';

inputForm: FormGroup;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'App DJ';
  Osobe = [
  { id: 1, ime: 'Ivan', prezime: 'Ivanić', iq: 100, t: 105, email: 'ivan.ivanic10@imail.com' },
  { id: 2, ime: 'Pero', prezime: 'Perić', iq: 105, t: 110, email: 'pero.peric15@email.com' },
  { id: 3, ime: 'Zoran', prezime: 'Zorić', iq: 110, t: 115, email: 'zoran.zoric11@amail.com' },
  { id: 4, ime: 'Ana',  prezime: 'Perina', iq: 115, t: 120, email: 'ana.perina20@imail.com' },
  { id: 5, ime: 'Mirko',  prezime: 'Golubić', iq: 125, t: 135, email: 'mirko.golubic35@imail.com' }];
    
@ViewChild('dataTable') table;
  dataTable: any;
  osobe: Observable<Osoba[]>;      
  rezultat = '';
  constructor(private kwpServis:KwpService, private router: Router){    
	this.rezultat = kwpServis.metoda();	
  } 
  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }
}

// http://localhost:4200/
 