import { Component, OnInit } from '@angular/core';
import { ItemSearchService } from '../item-search.service';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { SearchItem } from '../search-item';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
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
