import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AuthencationService } from '../services/authencation.service';
import { AlertsAndNotificationsService } from '../services/uiService/alerts-and-notifications.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  colors = [[255, 60, 125],[60, 60, 255],[60, 161, 255],[247, 182, 40],[255, 98, 84],[114, 33, 255],[77, 255, 249],[92, 255, 168]]
  constructor(public authService:AuthencationService,public alertify:AlertsAndNotificationsService,private dataProvider:DataProvider) { }
  emailControl:FormControl = new FormControl('',[Validators.required,Validators.email])
  passwordControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)])
  signinForm:FormGroup = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });
  ngOnInit() {
    this.startBackgroundAnimation();
  }
  login():void{
    console.log(this.signinForm);
    if (this.signinForm.status === 'VALID'){
      this.authService.loginEmailPassword(this.emailControl.value,this.passwordControl.value);
    } else {
      this.alertify.presentToast('Please fill all the fields correctly','error',3000);
    }
  }
  private startBackgroundAnimation(){
    let bubbleContainer = document.querySelector('.bubbleContainer');
    for (let i = 0; i < this.getRandomInt(5,10); i++) {
      bubbleContainer?.appendChild(this.createBubble());
    }
  }
  private createBubble():HTMLElement{
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    const size = this.getRandomInt(100,200) + 'px';
    bubble.style.width == size;
    bubble.style.width == size;
    bubble.style.left = this.getRandomInt(0, 100) + 'vw';
    bubble.style.top = this.getRandomInt(0, 60) + 'vh';
    bubble.style.animationDelay = this.getRandomInt(0, 9) + 's';
    bubble.style.background = this.getRandomColor();
    return bubble;
  }
  private getRandomInt(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private getRandomColor():string{
    const color = this.colors[this.getRandomInt(0,2)];
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
  }
}
