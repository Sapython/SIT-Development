import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-employee-data-widget',
  templateUrl: './employee-data-widget.component.html',
  styleUrls: ['./employee-data-widget.component.scss'],
})
export class EmployeeDataWidgetComponent implements OnInit {
  @Input() presentDay:number = 0;
  @Input() absent:number = 0;
  @Input() name:string = 'Vishwanathan Sharma';
  @Input() phoneNumber:string = '+91-9888888888';
  @Input() userData:any;
  @Input() userImage:string="assets/UI/Images/profile.jpg";
  @Input() userId:string;
  @Input() presentToday:string;
  
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
  constructor(private databaseService:DatabaseService) { }
  deleteUser(){
    if(confirm('Are you sure you want to delete this user?')){
      this.databaseService.deleteUserByUid(this.userData.uid);
    }
  }
  ngOnInit() {
    this.name = this.toTitleCase(this.name);
    console.log('Employee data',this.presentDay,this.absent)
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ this.presentDay, this.absent ] ,
          borderWidth:[0.5,0.5]
        },
      ]
    };
  }
  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
}
