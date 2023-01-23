import { Component,OnInit } from '@angular/core';
import { Add } from '../contact-list/contact.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  selectedContact?:Add
  title = 'assessment';
  ngOnInit(){
    
  }
}
