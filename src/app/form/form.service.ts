import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { ContactListComponent } from '../contact-list/contact-list.component';

import { Add } from '../contact-list/contact.model';
import { ContactsService } from '../contact-list/contacts.service';

@Injectable({
    providedIn:'root'
})
export class FormService{
    data = new Subject<any>();
    currentId ='';

    constructor(private http:HttpClient,private contactsService:ContactsService){

      this.contactsService.fetchContact();
    }

    
    createAndStoreContacts(name:string,contact:string,email:string,id:any){
        const postData: Add ={
            name: name, contact: contact, email: email,
            id: id
        }
       
        this.http.post<{id:string}>(
            'https://angular-assessment-506cf-default-rtdb.firebaseio.com/contacts.json',
            postData
            ).subscribe(responseData=>{
              console.log(responseData);
         
              this.contactsService.setContactList(Object.assign({},postData,{id:responseData}))
            }
          );
    }
    update(value:Add){

      this.http.put( 'https://angular-assessment-506cf-default-rtdb.firebaseio.com/contacts/'+this.currentId+'.json',value).subscribe(
       
      );
    
    }
    setForm(data:Add){
      console.log(data)
        this.data.next(data)
        this.currentId = data.id


    }

}