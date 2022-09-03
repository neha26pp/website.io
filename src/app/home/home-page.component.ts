import { Component, OnInit } from '@angular/core';
import { HomePage } from './home-page';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homepage: HomePage = {
    id: 1,
    name: 'Home Page',
  };

  constructor() {}

  ngOnInit(): void {}
}
