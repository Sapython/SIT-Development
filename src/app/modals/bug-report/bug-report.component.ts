import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
})
export class BugReportComponent implements OnInit {
  description:FormControl = new FormControl('',[Validators.required,Validators.maxLength(1000)])
  bugReportForm:FormGroup = new FormGroup({
    description: this.description,
  });
  constructor(private databaseService:DatabaseService,public modalController: ModalController) { }
  reportBug(){
    if (this.bugReportForm.valid){
      this.databaseService.logBug(this.description.value);
    } else {
      this.databaseService.logBug('');
    }
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
