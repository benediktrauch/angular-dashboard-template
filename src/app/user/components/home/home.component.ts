import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  success(message: string) {
    message = 'Test';
    this.alertService.success(message);
  }

  error(message: string) {
    message = 'Test';

    this.alertService.error(message);
  }

  info(message: string) {
    message = 'Test';

    this.alertService.info(message);
  }

  warn(message: string) {
    message = 'Test';

    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }


  ngOnInit() {
  }

}
