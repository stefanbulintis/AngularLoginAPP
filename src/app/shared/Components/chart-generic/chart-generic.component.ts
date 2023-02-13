import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'
@Component({
  selector: 'app-chart-generic',
  templateUrl: './chart-generic.component.html',
  styleUrls: ['./chart-generic.component.scss']
})
export class ChartGenericComponent implements OnInit{
  @Input() chartData: any;

  public chart: any;

  ngOnInit(): void {
    console.log(this.chartData)
    if (this.chartData) {
    }
    this.createChart();
  }

  createChart(): void {
     this.chart = new Chart('MyChart', {
      type: 'bar',
      data: this.chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
