import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Add } from '../contact-list/contact.model'
import { FormService } from './form.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../contact-list/contacts.service';
import { ContactListComponent } from '../contact-list/contact-list.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('postForm') addForm!: NgForm;
  @ViewChild(ContactListComponent) contactList:any;
  public loadedData:Add[] =[];
  ngOnInit() {
    this.formService.data.asObservable().subscribe(data=>{
      console.log(data)
      this.addForm.setValue(data);
    })
    
    // this.contactList.onFetchData();
   


  }
  // onFetchData(){
  //   this.contactsService.fetchContact().subscribe(contacts=>{
  //     this.loadedData = contacts
  //     console.log(contacts)
  //   }
      
  //     );

  // }
  // Add Contact
  // sendRequest
  constructor(private http: HttpClient, private formService: FormService,private contactService:ContactsService) {
   

  }

  onAddContact(postData: Add) {
    // this.addForm = new FormData({
    //   'name' : new FormData(null)
    //   'email': new FormData(null)
    //   'contact': new FormData(null)
    // })
    console.log(this.addForm);
    this.formService.createAndStoreContacts(postData.name,  postData.contact,postData.email, postData.id)


  }
  onUpdate(putData:Add)
  {
   
    this.formService.update(putData);
   
    
  }



}
