import { Location } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
    name: '',
    email: '',
    phone: '',
  };
  // checkoutForm;

  detailsForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contact = this.route.snapshot.data.contact;
    if (!contact)
      this.contact = {
        name: '',
        email: '',
        phone: '',
      };
    else {
      this.contact = contact;
      this.detailsForm.controls.name.setValue(this.contact.name);
      this.detailsForm.controls.email.setValue(this.contact.email);
      this.detailsForm.controls.phone.setValue(this.contact.phone);
    }
  }

  onSubmit(data) {
    const contact: Contact = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    this.contact._id ? (contact._id = this.contact._id) : null;
    this.contactService.saveContact(contact);
    this.router.navigate(['/contact']);
  }
  onBack(){
    this.router.navigate(['/contact']);
  }
}
