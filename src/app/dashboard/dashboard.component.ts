import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  canvas: any;
  ctx: any;

  topItems:{ itemName: string, total: number }[] = [
  {
    itemName:'iPhone 10',
    total: 150

  },
  {
    itemName:'iPhone 8',
    total: 90
  },
  {
    itemName:'Apple Watch 4',
    total: 80
  }
];

  constructor() { }

  ngOnInit(): void {

    this.canvas = document.getElementById('line-chart');
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['3rd Feb', '10 Feb', '15 Feb', '20 Feb', '25 Feb'],
        datasets: [{ 
            data: [1,1.5,1.8,2,2.5],
            label: "Sale",
            borderColor: "#c45850",
            fill: true
          } ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Sale (in Millions)'
        }
      }
    });

  }

}
