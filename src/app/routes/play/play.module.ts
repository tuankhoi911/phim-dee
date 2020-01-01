import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { PlayRoutingModule } from './play.routing';
import { EpisodeCardModule } from 'src/app/components/episode-card/episode-card.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    EpisodeCardModule
  ]
})
export class PlayModule { }
