import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent }      from './track/track.component';
import { AlbumComponent }      from './album/album.component';
import { ParentComponent } from "app/parent/parent.component";

const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  { path: 'artist',  component: ArtistComponent },
  { path: 'album',  component: AlbumComponent },
  { path: 'track',  component: TrackComponent },
  { path: 'parent',  component: ParentComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}