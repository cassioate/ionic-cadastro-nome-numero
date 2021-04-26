import { Component } from '@angular/core';
import { AppService } from './app.service';
import Contact from './model/contacts';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  contacts: Contact[] = []

  newContact = new Contact (null,null,null,null);
  enableEdit = false;

  constructor(
    private contactService: AppService
  ) {
    this.setContatcts();
  }

  private generateAvatar(): string {
    return `https://www.gravatar.com/avatar/${Math.ceil(Math.random() * 1024)}?s=32&d=identicon&r=PG`;
  }

  changeEditStatus(){
    this.enableEdit = !this.enableEdit;
  }

  saveContact(){
    this.newContact.avatar = this.generateAvatar(); 
    this.contactService.createContact(this.newContact).subscribe((response) => {
      this.clear();
      this.setContatcts();
      alert("Contato foi criado!");
    });
  }

  deleteContact(contact: Contact){
    this.contactService.deleteContact(contact).subscribe((response) => {
      this.setContatcts();
      alert("Contato foi deletado com sucesso!");  
    });

  }

  editContact(contact: Contact){
    this.contactService.editContact(contact).subscribe((response) => {
      this.setContatcts();
      this.enableEdit = false;
      alert("Contato foi editado com sucesso!");
    });
  }

  clear(){
    this.newContact = new Contact(null, null,null,null)
  }

  setContatcts(){
    this.contactService.getContacts()
    .subscribe((response: Contact[]) => {
      this.contacts = response;  
    })
  }
}
