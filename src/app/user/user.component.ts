import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/alert/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'template';
  settingsOpen = false;
  menuOpen = false;

  headerFixed = true;
  overlayMenu = false;

  menuData = [
    {
      name: 'Home',
      path: 'home',
      icon: 'assets/icons/menu-24px.svg'
    },
    {
      name: 'Profile',
      path: 'profile',
      icon: 'assets/icons/lock-24px.svg'
    }
  ];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    const testObject = { headerFixed: true, overlayMenu: false };

    localStorage.setItem('appSettings', JSON.stringify(testObject));

    const retrievedObject = localStorage.getItem('appSettings');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    // if (retrievedObject) {

    // }


  }

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


  toggleMenuStyle() {
    // this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.overlayMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
