import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { dalaLedgerData, sitLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayName: string = "John Doe"
  pending: number = 12;
  recieved: number = 5;
  unloaded: number = 20;
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [this.pending, this.recieved, this.unloaded] },
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

  @ViewChild('filtersButton') filtersButton: ElementRef;
  @ViewChild('filtersList') filtersList: ElementRef;
  showFiltersList: boolean = false;

  constructor(private renderer: Renderer2) {
    //  This event gets called by all clicks on the page
    // this.renderer.listen('window', 'click', (e: Event) => {
    //   if(!(this.filtersButton.nativeElement.contains(e.target) || this.filtersList.nativeElement.contains(e.target))) {
    //     this.showFiltersList = false; 
    //   }
    // });
  }

  ngOnInit() { }

  items = [1, 2, 3];

  dalaLedgers: dalaLedgerData[] = [
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe"
    },
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe"
    },
    {
      charge: 30,
      driverName: "John Doe",
      driverImage: "https://www.w3schools.com/howto/img_avatar.png",
      driverNumber: "+254712345678",
      driverId: "123456789",
      ledgerNo: "123456789",
      coordinator: "John Doe"
    }
  ];

  sitLedgers: sitLedgerData[] = [
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "unloaded",
    },
    {
      dispatchDate: "23 July 2021",
      delivery: "2333441",
      expectedDelivery: "30 July 2021",
      gateEntryDate: "25 July 2021",
      gateEntryNo: "666",
      mfgLocation: "D69",
      productCode: "112233",
      productName: "Biscoot",
      quantity: 360,
      recPlantDesc: "145",
      remarks: "Received",
      suppPlant: "D69",
      suppPlantDesc: "Tirupati Bakers",
      storageLocation: "Prayagraj",
      transName: "Jain Roadways",
      vehicleNo: "HR51AB1314",
      status: "recieved",
    }
  ];
}
