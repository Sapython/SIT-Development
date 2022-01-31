import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { dalaLedgerData, SIT, sitLedgerData } from 'src/app/structures/method.structure';
import { ModalController } from '@ionic/angular';
import { BugReportComponent} from 'src/app/modals/bug-report/bug-report.component';
import { RecievedLogComponent } from 'src/app/modals/recieved-log/recieved-log.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
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

  constructor(
    public modalController: ModalController,
    public dataProvider: DataProvider,
    private databaseService:DatabaseService,
    ) {
   
  }
  async reportBug() {
    const modal = await this.modalController.create({
      component: BugReportComponent,
    });
    return await modal.present();
  }
  async recievedlog() {
    const modal = await this.modalController.create({
      component: RecievedLogComponent,
    });
    return await modal.present();
  }
  ngOnInit() { 
    let sits= []
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      data.forEach((element:any) => {
        console.log(element.data(),element.id);
        sits.push(element.data());
      });
      console.log('data',sits);
      sits.sort((element:SIT,elementTwo:SIT) => {
        return new Date(element.uploadTime.seconds+element.uploadTime.nanoseconds).getTime() - new Date(elementTwo.uploadTime.seconds+elementTwo.uploadTime.nanoseconds).getTime();
      })
      console.log('sits',sits);
      this.sitLedgers = [sits[0],sits[1],sits[2]];
    })
  }

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
  sitLedgers: SIT[] = [];
}
