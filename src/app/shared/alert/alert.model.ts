export class Alert {
  type: AlertType;
  message: string;
  alertId: string;
  dissmiss: boolean;
  keepAfterRouteChange: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
