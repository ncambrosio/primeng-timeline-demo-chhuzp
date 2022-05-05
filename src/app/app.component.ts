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
        color: '#9C27B0',
        events: [
          {
            date: '05/01/2020',
            label: 'Previsión Riesgo',
            color: '#03fc9d',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
          {
            date: '15/01/2020',
            label: 'Previsión Riesgo (límite)',
            color: '#03d3fc',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
        ],
      },
      {
        label: '02/2020',
        color: '#9C27B0',
      },
      {
        label: '03/2020',
        color: '#9C27B0',
        events: [
          {
            date: '29/03/2020',
            label: 'Informe Secuelas',
            color: '#fc9803',
            description: 'Fecha de aprobación del informe de secuelas',
          },
          {
            date: '30/03/2020',
            label: 'Informe Secuelas (límite)',
            color: '#03d3fc',
            description: 'Fecha de aprobación de informe de secuelas',
          },
        ],
      },
      {
        label: '04/2020',
        color: '#9C27B0',
      },
      {
        label: '05/2020',
        color: '#9C27B0',
      },
      {
        label: '06/2020',
        color: '#9C27B0',
      },
      {
        label: '07/2020',
        color: '#9C27B0',
      },
      {
        label: '08/2020',
        color: '#9C27B0',
        events: [
          {
            date: '06/08/2020',
            label: 'Propuesta INSS',
            color: '#03d3fc',
            description: 'Envío de la propuesta al INSS',
          },
        ],
      },
      {
        label: '09/2020',
        color: '#9C27B0',
      },
      {
        label: '10/2020',
        color: '#9C27B0',
      },
    ];
  }
}
