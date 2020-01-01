import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from './episode-card.component';

@NgModule({
  declarations: [EpisodeCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodeCardComponent
  ]
})
export class EpisodeCardModule { }
