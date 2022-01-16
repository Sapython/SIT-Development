import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dala-widget',
  templateUrl: './dala-widget.component.html',
  styleUrls: ['./dala-widget.component.scss'],
})
export class DalaWidgetComponent implements OnInit {
  @Input() driverName:string;
  @Input() driverImage:string;
  @Input() driverId:string;
  @Input() charge:number;
  @Input() ledgerNo:string;
  @Input() coordinator:string;
  @Input() driverNumber:string;
  constructor(private router:Router) { }

  ngOnInit() {}
  navigate(path:string){
    this.router.navigateByUrl('/main/app/'+path);
  }
}
