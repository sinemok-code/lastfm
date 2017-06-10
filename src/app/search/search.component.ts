import { Component, OnInit } from '@angular/core';
import { ItemSearchService } from "app/item-search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private itemType: string;

  constructor( 
    private itemSearchService: ItemSearchService
    ) { }

  search(term: string): void {

    this.itemSearchService.search(term, this.itemType);
  }

  ngOnInit() {
  }

  logRadio(value) : void {
    this.itemType=value;
    this.itemSearchService.setItemType(value);
  }

}
