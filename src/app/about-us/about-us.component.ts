//
import { Component, OnInit } from '@angular/core';
import { Leader } from "src/app/about-us/leader";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  founder: Leader = {
    name: 'Taren Lewis',
    position: 'Founder',
    email: 'tbl5256@psu.edu'
  };

  president: Leader = {
    name: 'Neha Pandit',
    position: 'President',
    email: 'nxp5310@psu.edu'
  };

  vicePresident: Leader = {
    name: 'Manasi Patil',
    position: 'Vice President',
    email: 'msp5561@psu.edu'
  };

  treasurer: Leader = {
    name: 'Owen Powell',
    position: 'Treasurer',
    email: 'ozp5046@psu.edu'
  };

  eventsCoordinator: Leader = {
    name: 'Divya Shukla',
    position: 'Events Coordinator',
    email: 'dbs6082@psu.edu'
  }
}