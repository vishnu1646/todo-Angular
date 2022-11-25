import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewalltodoComponent } from './viewalltodo/viewalltodo.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute :Routes =[
  {
    path:"",
    component: AddtodoComponent
  },
  {
    path:"View",
    component:ViewalltodoComponent
  },
  {
    path:"Navbar",
    component:NavbarComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewalltodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
