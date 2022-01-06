import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-product-ledger-widget',
  templateUrl: './product-ledger-widget.component.html',
  styleUrls: ['./product-ledger-widget.component.scss'],
})
export class ProductLedgerWidgetComponent implements OnInit {
  @Input() Bakery: string = "TIRUPATI BAKERS";
  @Input() ItemName: string = "Biscuit";
  @Input() Safe:number = 0;
  @Input() Damage:number = 0;
  @Input() Ledgerno:string = "123XYZ0";
  @Input() Price:string = "23245";

  public doughnutChartLabels: string[] = ['Safe', 'Damaged'];
  public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
      { data: [this.Safe, this.Damage] },
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
