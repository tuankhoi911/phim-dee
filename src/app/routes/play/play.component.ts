import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }

  listEpisodes = [
    {
      name: "sex education: season 1",
      episode: '0: Destiny',
      thumbnail: 'assets/images/thumbnail.jpg',
      time: '45:00'
    },
    {
      name: "sex education: season 1",
      episode: '0: Destiny',
      thumbnail: 'assets/images/thumbnail.jpg',
      time: '45:00'
    },
    {
      name: "sex education: season 1",
      episode: '0: Destiny',
      thumbnail: 'assets/images/thumbnail.jpg',
      time: '45:00'
    },
    {
      name: "sex education: season 1",
      episode: '0: Destiny',
      thumbnail: 'assets/images/thumbnail.jpg',
      time: '45:00'
    },
    {
      name: "sex education: season 1",
      episode: '0: Destiny',
      thumbnail: 'assets/images/thumbnail.jpg',
      time: '45:00'
    },
  ]

  ngOnInit() {
  }

}
