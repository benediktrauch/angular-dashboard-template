import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id: string;

  alerts: Alert[] = [];
  subscription: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        if (!alert.message) {
          // clear alerts when an empty alert is received
          this.alerts = [];
          return;
        }

        if (alert.dissmiss) {
          setTimeout(() => { this.removeAlert(alert); }, 10000);
        }

        // add alert to array
        this.alerts.push(alert);
      });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // remove specified alert from array
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  alertType(alert: Alert) {
    if (!alert) {
      return;
    }
    switch (alert.type) {
      case AlertType.Success:
        return 'Hinweis';
      case AlertType.Error:
        return 'Vorsicht';
      case AlertType.Info:
        return 'Info';
      case AlertType.Warning:
        return 'Warnug';
    }
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
