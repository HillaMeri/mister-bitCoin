import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { Contact } from '../models/contact.model';

import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // private BASE_URL = 'http://localhost:3030/api/contact';

  private BASE_URL = process.env.NODE_ENV === 'production' ? '/api/contact' : 'http://localhost:3030/api/contact';

  private _contacts$ = new BehaviorSubject<Array<Contact>>([]);
  public contacts$ = this._contacts$.asObservable();

  public loadContacts(filterBy = { name: '' }): void {
    this.http
      .get<Contact[]>(this.BASE_URL)
      .pipe(
        map((contacts) => {
          return contacts.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.name.toLowerCase());
          });
        })
      )
      .subscribe((contacts) => {
        this._contacts$.next(contacts);
      });
  }

  public getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(this.BASE_URL + `/${id}`).pipe(
      retry(1),
      catchError(() => throwError('no contact found!'))
    );
  }

  public saveContact(contact: Contact) {
    return contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
  }

  private _updateContact(contact: Contact) {
    return this.http
      .put<any>(`${this.BASE_URL}/${contact._id}`, contact)
      .subscribe(() => this.loadContacts());
  }

  public _addContact(contact) {
    return this.http
      .post<any>(this.BASE_URL, contact)
      .subscribe((contant) => this.loadContacts());
  }

  public removeContant(contactId) {
    return this.http
      .delete(this.BASE_URL + `/${contactId}`)
      .subscribe((data) => {
        this.loadContacts();
      });
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase();
    return contacts.filter((contact) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      );
    });
  }
}
