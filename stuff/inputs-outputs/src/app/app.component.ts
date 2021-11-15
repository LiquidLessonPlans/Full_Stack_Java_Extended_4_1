

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];


  addItem(newItem: string) {
    this.items.push(newItem);
  }


  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem(item: string) {
    console.warn(`Parent says: buying ${item}.`);
  }

  saveForLater(item: string) {
    console.warn(`Parent says: saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}

