import { Component, OnInit } from '@angular/core';
import { showUser } from '../tab1/tab1.page';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {
  displayUser:{name: string, phone: number, img: string}[];
  constructor() { 
    this.displayUser = showUser;
    console.log(this.displayUser);
  }
  ngOnInit() {
  }

}
