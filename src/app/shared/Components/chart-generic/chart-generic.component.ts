import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-chart-generic',
  templateUrl: './chart-generic.component.html',
  styleUrls: ['./chart-generic.component.scss']
})
export class ChartGenericComponent implements OnInit{
  @Input() chartData: any;

  public chart: any;

  ngOnInit(): void {
    if (this.chartData) {
      this.createChart();
    }
    console.log(this.chartData)
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
