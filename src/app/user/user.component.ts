import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'template';

  headerFixed = true;
  menuOpen = false;
  // pushMenu = false;
  overlayMenu = false;
  settingsOpen = false;
  menuData = [
    {
      name: 'Home',
      path: 'home'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    },
    {
      name: 'Profile',
      path: 'profile'
    }
  ];
  constructor() { }

  ngOnInit() { }

  toggleMenuStyle() {
    // this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.overlayMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
