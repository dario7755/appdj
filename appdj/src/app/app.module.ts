import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { KwpService } from './service/kwp.service';

import { ObjektNoviComponent } from './components/objekt-novi/objekt-novi.component';
import { ObjektListaComponent } from './components/objekt-lista/objekt-lista.component';
import { ObjektUpitComponent } from './components/objekt-upit/objekt-upit.component';
import { ObjektComponent } from './objekt/objekt.component';
import { DataSortPipe } from './data-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjektNoviComponent,
    ObjektListaComponent,
    ObjektUpitComponent,
    ObjektComponent,    
    DataSortPipe
  ],
  imports: [
    BrowserModule,	
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
    ReactiveFormsModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
