import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import { Add } from './contact.model';
@Injectable({
    providedIn:'root'
})
export class ContactsService{
    data = new Subject<any>();
    error = new Subject<String>();
    constructor(private http:HttpClient){

    }

    currentContact :Add = {
        id:'',
        name:'',
        email:'',
        contact:''
    };
    // loadedData:Add[] =[];
    fetchContact(){
       return this.http.get<{[key:string]:Add}>('https://angular-assessment-506cf-default-rtdb.firebaseio.com/contacts.json')
        .pipe(
          map(responseData => {
          const allContacts:Add[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
               allContacts.push({...responseData[key],id: key});
              //  console.log(key)
            } 
          }
          
          return allContacts;
          })
        );

    }
    setContactList(data:any){
        
        console.log('setcontactlist',data);
        console.log(this.currentContact);
        this.data.next(data);
        
        

        // this.fetchContact();

             
        
    
      }
    deleteContact(id:any){
        return this.http.delete('https://angular-assessment-506cf-default-rtdb.firebaseio.com'+'/'+'contacts'+'/'+id+'.json',
            
        )
    
    }
  
}