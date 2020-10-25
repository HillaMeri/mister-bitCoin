import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolveService implements Resolve<Observable<Contact>> {

  constructor(public contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Contact> {
    const id = route.paramMap.get('id');
    return this.contactService.getContactById(id);
  }
}
