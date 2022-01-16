import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  @Input() username: string = "Sajan Pandey";
  constructor(private router:Router) { }

  ngOnInit() {}
  navigate(path:string){
    this.router.navigateByUrl('/main/app/'+path);
  }
}
