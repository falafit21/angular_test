import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { ViewContactComponent } from './contact-list/view-contact/view-contact.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes =[
  {path:'', component: HomeComponent},
  // { path: '**', component: PageNotFoundComponent },
  // {path:'contact/:id',component:ViewContactComponent},
  {path:'contact',component:ContactListComponent,children:[
    {path:':id',component:ViewContactComponent}
  ]},
 
// 
];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactListComponent,
    HeaderComponent,
    ViewContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
