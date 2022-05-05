import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  events1: any[];
  events2: any[];
  entriesPerMonth: any[];
  entriesPerDay: any[];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.entriesPerMonth = [
      {
        label: '01/2020',
        events: [
          {
            date: '05/01/2020',
            label: 'Previsión Riesgo',
            description: 'Fecha de aprobación de previsión de riesgo',
            severity: 'success',
          },
          {
            date: '15/01/2020',
            label: 'Previsión Riesgo (límite)',
            description: 'Fecha límite para aprobación de previsión de riesgo',
            severity: 'info',
          },
          {
            date: '20/01/2020',
            label: 'Evento fuera plazo',
            description: 'El evento sucede fuera de plazo',
            severity: 'danger',
          },
        ],
      },
      {
        label: '02/2020',
      },
      {
        label: '03/2020',
        events: [
          {
            date: '30/03/2020',
            label: 'Informe Secuelas (límite)',
            description:
              'Fecha límite para la aprobación del informe de secuelas',
            severity: 'info',
          },
        ],
      },
      {
        label: '04/2020',
        events: [
          {
            date: '01/04/2020',
            label: 'Informe Secuelas',
            description: 'Fecha de aprobación del informe de secuelas',
            severity: 'danger',
          },
        ],
      },
      {
        label: '05/2020',
      },
      {
        label: '06/2020',
      },
      {
        label: '07/2020',
      },
      {
        label: '08/2020',
        events: [
          {
            date: '06/08/2020',
            label: 'Propuesta INSS',
            description: 'Envío de la propuesta al INSS',
            severity: 'success',
          },
        ],
      },
      {
        label: '09/2020',
      },
      {
        label: '10/2020',
      },
      {
        label: '11/2020',
      },
      {
        label: '12/2020',
      },
    ];
  }
}
