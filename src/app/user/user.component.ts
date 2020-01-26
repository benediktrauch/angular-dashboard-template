import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/alert/alert.service';

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
    }
  ];

  constructor(private alertService: AlertService) { }

  success(message: string) {
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }

  ngOnInit() { }

  toggleMenuStyle() {
    // this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.overlayMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
