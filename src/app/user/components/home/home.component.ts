import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { PlantesService } from 'src/app/services/plantes.service';
import { Plantes } from 'src/app/models/plantes';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plantes$: Observable<Array<Plantes>>;

  constructor(private alertService: AlertService, private plantesService: PlantesService) { }

  success(message: string) {
    message = 'Test';
    this.alertService.success(message);
  }

  error(message: string) {
    message = 'Test';
    this.alertService.error(message);
  }

  info(message: string) {
    message = 'Velit optio aut fuga neque sunt, cumque reprehenderit obcaecati accusantium totam voluptatibus eos doloremque.';
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

    this.plantes$ = this.plantesService.getPlantes();

    this.plantes$.subscribe(resp => {
      console.log('resp', resp);
    });
  }

}
