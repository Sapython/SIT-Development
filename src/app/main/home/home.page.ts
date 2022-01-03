import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { dalaLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayName:string="John Doe"
  pending:number=12;
  recieved:number=5;
  unloaded:number=20;
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ this.pending, this.recieved, this.unloaded ] },
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
  }
  items = [1,2,3]
  dalaLedgers:dalaLedgerData[] = [
    { 
      charge:30,
      driverName:"John Doe",
      driverImage:"https://www.w3schools.com/howto/img_avatar.png",
      driverNumber:"+254712345678",
      driverId:"123456789",
      ledgerNo:"123456789",
      coordinator:"John Doe"
    },
    { 
      charge:30,
      driverName:"John Doe",
      driverImage:"https://www.w3schools.com/howto/img_avatar.png",
      driverNumber:"+254712345678",
      driverId:"123456789",
      ledgerNo:"123456789",
      coordinator:"John Doe"
    },
    { 
      charge:30,
      driverName:"John Doe",
      driverImage:"https://www.w3schools.com/howto/img_avatar.png",
      driverNumber:"+254712345678",
      driverId:"123456789",
      ledgerNo:"123456789",
      coordinator:"John Doe"
    }
  ]
}
