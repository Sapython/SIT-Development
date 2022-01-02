import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-employee-data-widget',
  templateUrl: './employee-data-widget.component.html',
  styleUrls: ['./employee-data-widget.component.scss'],
})
export class EmployeeDataWidgetComponent implements OnInit {
  @Input() presentDay:number=12;
  @Input() absent:number=5
  @Input() name:string = 'Vishwanathan Sharma';
  @Input() phoneNumber:string = '+91-9888888888';
  public doughnutChartLabels: string[] = [ 'Present', 'Absent'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ this.presentDay, this.absent ] ,
        borderWidth:[0.5,0.5]
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor() { }

  ngOnInit() {}

}
