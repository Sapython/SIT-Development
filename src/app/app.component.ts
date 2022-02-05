import { Component, OnInit } from '@angular/core';
import { AuthencationService } from './services/authencation.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';
import { DataProvider } from './providers/data.provider';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthencationService,private router:Router,public dataProvider:DataProvider) {}
  useIncompatible:boolean = false;
  async ngOnInit(){
    this.authService.user.subscribe(user=>{
      if (user){
        SplashScreen.hide();
        this.router.navigate(['/main/app/home']);
        // this.router.navigate(['/admin']);
      } else {
        SplashScreen.hide();
        this.router.navigate(['/login'])
      }
    })
  }
  navigate(path:string){
    console.log(path);
    this.router.navigateByUrl('/main/app/'+path);
  }
  navigateToAdmin(path:string){
    console.log(path);
    this.router.navigateByUrl('/main/admin/'+path);
  }
}
