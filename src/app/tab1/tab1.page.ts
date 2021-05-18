import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newContacts } from '../add-contact/add-contact.page';
import { ShowDetailsPage} from '../show-details/show-details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //contacts = contactList;
  contacts : {name: string, phone: number, img: string}[];
  favContacts = favoriteList;
  showList = showUser;
  addedContacts: {name: string, phone: number, img: string}[];
  constructor(private navController: NavController) {
    this.addedContacts = newContacts;

    setTimeout(() => {
      this.contacts = contactList;
    }, 3000);
    
  }
  addContact(){
    this.navController.navigateForward('add-contact');
    console.log("contact added");
  }


  showDetails(_item){
    this.navController.navigateForward('show-details');
    this.showList[0] = _item;
    console.log("item displayed");
    console.log(_item.name + "displayed");
  }

  delete(_item){
    const index = this.contacts.map(function(_item){return _item.name; }).indexOf(_item);
    this.contacts.splice(index,1);
    console.log(_item);
    console.log("item deleted");
  }

  markFav(_item){
    this.favContacts.push(_item);
    console.log(_item.name + "marked favorite");
    console.log(this.favContacts.length);
    console.log(this.favContacts[this.favContacts.length - 1]);
  }


}

export var contactList: {name: string, phone: number, img: string}[] = [
  {name: "Abhilash", phone: 9000000001, img: "https://bollywoodhindi.in/wp-content/uploads/2021/04/Naveen-Kasturia.jpg"},
  {name: "Jeetu", phone: 9000000002, img: "https://www.thewikifeed.com/wp-content/uploads/2020/11/jitendra-kumar-1.jpg"},
  {name: "Vartika Chaturvedi", phone: 9000000003, img: "https://imgk.timesnownews.com/media/Shefali_Shah_new.png"},
  {name: "Ganesh Gaitonde", phone: 9000000004, img: "https://motsandco.com/wp-content/uploads/avatar-1.png"},
  {name: "Sandeep Bhaiyya", phone: 9000000005, img: "https://www.wikibiodata.com/wp-content/uploads/2020/06/Sunny-Hinduja.jpg"},
  {name: "Guddu", phone: 9000000006, img: "https://motsandco.com/wp-content/uploads/avatar-1.png"},
  {name: "Monica Geller", phone: 9000000007, img: "https://i.pinimg.com/564x/a1/68/fa/a168fa23eaebfe1222c817269caeff4f.jpg"},
  {name: "Srikant", phone: 9000000008, img: "https://pbs.twimg.com/profile_images/1174754763038216194/5fz9V524.jpg"},
  {name: "Harshad Mehta", phone: 9000000009, img: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/scam_1992_imdb_rating_main.jpg"},
  {name: "Rachel Green", phone: 9000000010, img: "https://motsandco.com/wp-content/uploads/avatar-1.png"},
  {name: "Sk", phone: 9000000011, img: "https://pbs.twimg.com/profile_images/1388052175448772610/5PWCivCj_400x400.jpg"},
  {name: "Sherlock", phone: 9000000012, img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/01/19/19/27-Sherlock-BBC.jpg?width=1200"}
];

export var favoriteList: {name: string, phone: number, img: string}[] = [];

export var showUser: {name: string, phone: number, img: string}[] = [];