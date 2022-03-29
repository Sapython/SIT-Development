import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-product-ledger-widget',
  templateUrl: './product-ledger-widget.component.html',
  styleUrls: ['./product-ledger-widget.component.scss'],
})
export class ProductLedgerWidgetComponent implements OnInit {
  @Input() sellerName: string = "TIRUPATI BAKERS";
  @Input() itemName: string = "Biscuit";
  @Input() safe:number = 0;
  @Input() damage:number = 0;
  @Input() ledgerNo:string = "123XYZ0";
  @Input() productCode:string = "23245";
  @Input() damageImage:string;
  imageLoaded:boolean = true;
  image:string;
  showImage:boolean = false;
  public doughnutChartLabels: string[] = ['Safe', 'Damaged'];
  public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
      { data: [this.safe, this.damage] },
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

  ngOnInit() {
    this.image = "https://avatars.dicebear.com/api/gridy/"+this.productCode+".svg";
  }

}
