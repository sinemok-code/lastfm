import { Component, OnInit } from '@angular/core';
import { ItemSearchService } from "app/item-search.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

private itemType:string;

  constructor(
    private itemSearchService: ItemSearchService) { }

  ngOnInit() {
    this.itemSearchService.itemType$.subscribe(response => this.itemType=response);
  }

}
