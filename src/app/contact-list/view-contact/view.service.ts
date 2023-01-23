import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {map} from 'rxjs/operators';
import { Add } from '../contact.model';
@Injectable({
    providedIn:'root'
})

export class viewService{
    constructor(private http:HttpClient){

    }

}