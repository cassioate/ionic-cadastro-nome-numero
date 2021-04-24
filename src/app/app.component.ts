import { Component } from '@angular/core';

class Contact{
  constructor(
    public avatar: string,
    public name: string,
    public number: string
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  contacts: Contact[] = []

  newContact = new Contact (null,null,null);
  enableEdit = false;

  constructor() {
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
    console.log(this.newContact.avatar = this.generateAvatar());
    this.contacts.push(this.newContact);
    this.clear();
  }

  deleteContact(contact: Contact){
    this.contacts = this.contacts.filter(tempContact => tempContact.name !== contact.name);
  }

  clear(){
    this.newContact = new Contact(null,null,null)
  }

  setContatcts(){
    this.contacts = [
      { avatar: this.generateAvatar(), name: "Teste1", number: "1"},
      { avatar: this.generateAvatar(), name: "Teste2", number: "2"},
      { avatar: this.generateAvatar(), name: "Teste3", number: "3"},
      { avatar: this.generateAvatar(), name: "Teste4", number: "4"},
      { avatar: this.generateAvatar(), name: "Teste5", number: "5"}
    ]
  }
}
