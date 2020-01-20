import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';

  headerFixed = true;
  menuOpen = true;
  pushMenu = true;
  overlayMenu = false;
  settingsOpen = false;

  toggleMenuStyle() {
    this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.pushMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
