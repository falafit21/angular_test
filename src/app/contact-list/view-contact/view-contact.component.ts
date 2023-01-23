import { Component,OnInit,Input, EventEmitter ,Output} from '@angular/core';
import {Add} from '../contact.model'
import {Router,ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  // @Input() contact:Add;
  constructor(private router:ActivatedRoute,private location:Location){}
  @Input() contact?: Add;
  // @Output() contactSelected = new EventEmitter<void>();
  private contactId:any
  id:any
  ngOnInit(){
    console.log(this.contact)
    console.log(this.contact?.name)
    // this.contactId = this.router.params.subscribe(
    //   params => {this.id = +params['id'];}
    // )

  }
  onBack(){
    this.location.go('/');
    // this.location.back();
  }
  ngOnDestroy(){
    this.contactId.unsubscribe();
  }
  
  
  // onSelected(){
  //   this.contactSelected.emit();
  // }

}
