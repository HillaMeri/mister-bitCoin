import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {

  contacts: Contact[] = []
  selectedContact: Contact = null
  subscription: Subscription
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    })
  }
  selectContact(contact) {
    this.selectedContact = contact;
  }

  onFilterHandler(filterBy) {
    this.contactService.loadContacts(filterBy);     
  }
}
