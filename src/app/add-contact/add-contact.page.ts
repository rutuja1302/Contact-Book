import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactList } from '../tab1/tab1.page';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})



export class AddContactPage implements OnInit {

  addGroup: FormGroup;
  newCon = newContacts;

  constructor( formBuilder: FormBuilder) {
    //contactList.push(this.addGroup.value);
    this.addGroup = formBuilder.group(
      {
        name: ["", [Validators.required]],
        phone: ["", [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)])]],
        img: ["", [Validators.required]]
      }
    );
    
   }

  ngOnInit() {
  }

  addContact(){
    this.newCon = this.addGroup.value;
    contactList.push(this.addGroup.value);
    console.log("Contact Saved Successfully");
    console.log(this.newCon);
  }

}

export var newContacts: {name: string, phone: number, img: string}[];

