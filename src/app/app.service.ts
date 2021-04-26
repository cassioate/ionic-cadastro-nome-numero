import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import Contact from './model/contacts';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://backtestecassio.herokuapp.com/contacts';

  constructor(
    private httpClient: HttpClient
  ) { }

  getContacts() {
    return this.httpClient.get(this.url);
  }

  createContact(contact: Contact) {
    return this.httpClient.post(this.url, contact)
  }

  editContact(contact: Contact){
    return this.httpClient.put(`${this.url}/${contact.id}`, contact)
  }

  deleteContact(contact: Contact){
    return this.httpClient.delete(`${this.url}/${contact.id}`)
  }
}
