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
  entries: any[];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.events1 = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: PrimeIcons.COG,
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: PrimeIcons.CHECK,
        color: '#607D8B',
      },
    ];

    this.events2 = [
      '01/2021',
      '02/2021',
      '03/2021',
      '04/2021',
      '05/2021',
      '06/2021',
      '07/2021',
      '08/2021',
      '09/2021',
      '10/2021',
      '11/2021',
      '12/2021',
    ];

    this.entries = [
      {
        label: '01/2020',
        status: 'Ordered',
        color: '#9C27B0',
        events: [
          {
            date: '05/01/2020',
            label: 'Previsión Riesgo',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
          {
            date: '15/01/2020',
            label: 'Previsión Riesgo (límite)',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
        ],
      },
      {
        label: '02/2020',
        status: 'Ordered',
        color: '#9C27B0',
      },
      {
        label: '03/2020',
        status: 'Ordered',
        color: '#9C27B0',
        events: [
          {
            date: '05/01/2020',
            label: 'Previsión Riesgo',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
          {
            date: '15/01/2020',
            label: 'Previsión Riesgo (límite)',
            description: 'Fecha de aprobación de previsión de riesgo',
          },
        ],
      },
      {
        label: '04/2020',
        status: 'Ordered',
        color: '#9C27B0',
      },
      {
        label: '05/2020',
        status: 'Ordered',
        color: '#9C27B0',
      }
    ];
  }
}
