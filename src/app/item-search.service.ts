import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchItem }           from './search-item';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ItemSearchService {

  private itemsSource= new Subject<SearchItem[]>(); //mesaj icin
  public item$= this.itemsSource.asObservable();//itemsource da degisiklik oldugu zaman item$(observal degiskenlerin son harfi $ olur) in degerini degistir.

  private itemTypeSource= new Subject<string>(); //mesaj icin
  public itemType$= this.itemTypeSource.asObservable();//itemsource da degisiklik oldugu zaman item$(observal degiskenlerin son harfi $ olur) in degerini degistir.


  constructor(private http: Http) {
    //console.log('yaratildim');
   }

  setItemType(itemType:string)
  {
    this.itemTypeSource.next(itemType);
  }

  search(searchTerm: string, itemType:string) {   
     this.http.get(`http://ws.audioscrobbler.com/2.0/?method=${itemType}.search&${itemType}=${searchTerm}&api_key=cbe6c4c6b49c376ab87a88661f38017d&format=json`)
               .map(response => this.getitems(response, itemType))
               .subscribe(response => this.itemsSource.next(response) );//subscribe observal da degisiklik oldugunda haber ver demek, next metodu da subject e -queue ya mesaj atmak icin.

  }
  getitems(response, itemType) : SearchItem[]
  {
    if (itemType==='artist')
    {
      return response.json().results.artistmatches.artist as SearchItem[];
    }
    else if (itemType==='track')
    {
      return response.json().results.trackmatches.track as SearchItem[];
    }
    else if (itemType==='album')
    {
      return response.json().results.albummatches.album as SearchItem[];
    }
  }
}



