import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeDataModalComponent } from 'src/app/modals/employee-data-modal/employee-data-modal.component';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {
  employees: any[] = [];
  totaldate: number = 0;
  constructor(private databaseService: DatabaseService,private modalController:ModalController) {}
  ngOnInit() {
    function daysIntoYear(date) {
      return (
        (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
          Date.UTC(date.getFullYear(), 0, 0)) /
        24 /
        60 /
        60 /
        1000
      );
    }
    this.totaldate = daysIntoYear(new Date());
    this.databaseService.getEmployees().then((data: any) => {
      data.forEach((worker: any) => {
        const data = worker.data() as UserData;
        this.employees.push(data);
      });
    });
  }
  round(value:number){
    return Math.round(value);
  }
  openUser(userId:string){
    this.modalController.create({
      component:EmployeeDataModalComponent,
      componentProps:{
        userId:userId
      }
    }).then(modal=>{
      modal.present();
    })
  }
}
