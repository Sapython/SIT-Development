import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-ledger',
  templateUrl: './expense-ledger.component.html',
  styleUrls: ['./expense-ledger.component.scss'],
})
export class ExpenseLedgerComponent implements OnInit {
  @Input() expenseName:string;
  @Input() ledgerNo:string;
  @Input() charge:number;
  @Input() condition:'danger'|'success'|'warning'|'primary';
  @Input() servicable:boolean = true;
  @Input() reason:string;
  @Input() date:string;
  @Input() starred:boolean = false;
  toggleStarred(){
    this.starred = !this.starred;
  }
  expandDetails:boolean = false;
  constructor() { }
  ngOnInit() {
  }
}
