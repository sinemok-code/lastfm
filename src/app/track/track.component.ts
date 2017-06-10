import { Component, OnInit } from '@angular/core';
import { SearchItem } from "app/search-item";
import { ItemSearchService } from "app/item-search.service";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  items: SearchItem[];

  constructor(
    private itemSearchService: ItemSearchService
    ) {}
  

  ngOnInit() {
    this.itemSearchService.item$.subscribe(response => this.publishItems(response));
  }

  publishItems(data){
    this.items = data;
  }
}
