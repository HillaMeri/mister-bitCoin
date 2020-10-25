import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService,
    private router: Router
  ) {}
  contact: Contact;

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact;
  }

  onBack() {
    this.location.back();
  }

  onRemove(contactId) {
    this.contactService.removeContant(contactId);
    this.router.navigate(['/contact']);
  }
}
