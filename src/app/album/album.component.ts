import { Component, OnInit } from '@angular/core';
import { SearchItem } from "app/search-item";
import { ItemSearchService } from "app/item-search.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

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
