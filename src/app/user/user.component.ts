import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'template';

  headerFixed = true;
  menuOpen = true;
  pushMenu = true;
  overlayMenu = false;
  settingsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuStyle() {
    this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.pushMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
