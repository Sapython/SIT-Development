import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EmployeeDataModalComponent } from 'src/app/modals/employee-data-modal/employee-data-modal.component';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit,OnDestroy {
  employees: any[] = [];
  totaldate: number = 0;
  employeesSubscription:Subscription = Subscription.EMPTY;
  constructor(
    private databaseService: DatabaseService,
    private modalController: ModalController
  ) {}
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
    this.employeesSubscription=this.databaseService.getEmployeesSubscription().subscribe((data: any) => {
      this.employees = [];
      data.forEach((worker: any) => {
        const data = worker.data() as UserData;
        this.employees.push(data);
        // console.log(data);
      });
    });
  }
  ngOnDestroy(): void {
    this.employeesSubscription.unsubscribe();
  }
  round(value: number) {
    return Math.round(value);
  }
  openUser(user: string) {
    this.modalController
      .create({
        component: EmployeeDataModalComponent,
        componentProps: {
          user: user,
        },
      })
      .then((modal) => {
        modal.present();
      });
  }
  isPresent(date: any) {
    if (date) {
      const dayA = date.toDate();
      const dayB = new Date();
      return dayA.toDateString() === dayB.toDateString();
    } else {
      return false;
    }
  }
}
