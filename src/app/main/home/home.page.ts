import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { dalaLedgerData, SIT, sitLedgerData } from 'src/app/structures/method.structure';
import { ModalController } from '@ionic/angular';
import { BugReportComponent} from 'src/app/modals/bug-report/bug-report.component';
import { ReceivedLogComponent } from 'src/app/modals/received-log/received-log.component';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild('header', {static: false}) private header: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView: boolean;
  pending: number = 0;
  received: number = 0;
  unloaded: number = 0;
  sitsLoaded:boolean = false;
  public doughnutChartLabels: string[] = ['Pending', 'Received', 'Unloaded'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [this.pending, this.received, this.unloaded] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {}
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {}
  @ViewChild('filtersButton') filtersButton: ElementRef;
  @ViewChild('filtersList') filtersList: ElementRef;
  showFiltersList: boolean = false;

  constructor(
    public modalController: ModalController,
    public dataProvider: DataProvider,
    private databaseService:DatabaseService,
    private router:Router,
    ) {
  }
  async reportBug() {
    const modal = await this.modalController.create({
      component: BugReportComponent,
    });
    return await modal.present();
  }
  async receivedlog() {
    const modal = await this.modalController.create({
      component: ReceivedLogComponent,
    });
    return await modal.present();
  }
  ngOnInit() { 
    this.databaseService.getSitLedgers().subscribe((data:any)=>{
      let sits= []
      this.pending = 0;
      this.received = 0;
      this.unloaded = 0;
      data.forEach((element:any) => {
        // console.log(element.data(),element.id);
        let filteredData = element.data();
        filteredData.id = element.id;
        if(filteredData.status=='pending'){
          this.pending++;
        } else if(filteredData.status=='received'){
          this.received++;
        } else if(filteredData.status=='unloaded'){
          this.unloaded++;
        }
        sits.push(filteredData);
      });
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          { data: [this.pending, this.received, this.unloaded] },
        ]
      };
      // console.log('data',sits);
      sits.sort((element:SIT,elementTwo:SIT) => {
        return elementTwo.views - element.views;
      })
      // console.log('sits',sits);
      let counter =0;
      this.sitLedgers = [];
      for (const iterator of sits) {
        this.sitLedgers.push(iterator);
        counter++;
        if(counter>=3){
          break;
        }
      }
      this.sitsLoaded = true;
    })
  }
  navigate(path:string){
    console.log(path);
    this.router.navigateByUrl('/main/app/'+path);
  }
  log(data:any){
    console.log(data,data.offsetWidth > 0 && data.offsetHeight > 0);
    return true;
  }
  items = [1, 2, 3];
  sitLedgers: SIT[] = [];
}
