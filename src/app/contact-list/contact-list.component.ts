import { Component,OnInit,Input, EventEmitter,Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Add } from './contact.model';
import { ContactsService } from './contacts.service';
import { Subscription } from 'rxjs';
import { FormService } from '../form/form.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  @Input() contact?:Add;
  // @Output() contactSelected = new EventEmitter<void>();

  @Output() contactWasSelected = new EventEmitter<Add>();
  createContactSubscription:Subscription = new Subscription();
  selectedContact?:Add;

  constructor(private http:HttpClient,private contactsService:ContactsService, private formService:FormService){

  }

  ngOnInit() {
   
    this.contactsService.fetchContact();
    this.onFetchData();
    // this.createContactSubscription = this.contactsService.setContactList().subscribe(data=>{
    //   // this.loadedData = data;
    //   console.log(data)
    // })
    this.contactsService.data.asObservable().subscribe(data=>{
      console.log(data)
      this.loadedData.push(data);
    })
    // this.onSelected(add);
    
    // this.createContactSubscription = this.formService.createAndStoreContacts().subscribe
  }
  loadedData:Add[] =[];
  error=null;
 
  


    //pull contact
  //sendHttpRequest
  onFetchData(){
    this.contactsService.fetchContact().subscribe(contacts=>{
      this.loadedData = contacts
      console.log(contacts)
    }
      
      );

  }
  onEdit(contact:Add){
    const currentCon = this.loadedData.find((contact)=> {return contact.id ===contact})
    this.formService.setForm(contact)
    this.formService.currentId = contact.id;
  }
  
  onDelete(id:string){
    if (confirm('Are you sure to delete this contact?')){
      this.contactsService.deleteContact(id).subscribe(()=>{
        this.loadedData = this.loadedData.filter(contact=>contact.id !== id);
        console.log(this.loadedData)
      },
      error =>{
        this.error = error.message;
        console.log(error)
      }
      
        )
      // this.contactsService.slice()
      console.log(id);
    }
  }

  onSelected(add:Add){
    this.contactWasSelected.emit(add);
    
    console.log(add)
console.log(this.contactWasSelected)

  }


}
