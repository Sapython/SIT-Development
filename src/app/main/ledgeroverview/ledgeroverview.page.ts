import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { dalaLedgerData, expenseledgerData, LabourLedgerData } from 'src/app/structures/method.structure';

@Component({
  selector: 'app-ledgeroverview',
  templateUrl: './ledgeroverview.page.html',
  styleUrls: ['./ledgeroverview.page.scss'],
})
export class LedgeroverviewPage implements OnInit {
  items = [1,2,3]
  constructor(private databaseService:DatabaseService) { }

  ngOnInit() {
    this.databaseService
  }
}
