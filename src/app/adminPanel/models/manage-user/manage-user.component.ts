import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BasicUser } from 'src/app/structures/method.structure';
import { UserInfoComponent } from '../../popups/user-info/user-info.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {

  constructor(public modalController: ModalController,private popoverController: PopoverController) { }
  users:BasicUser[] = [
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=1',
      access:'admin',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=2',
      access:'guest',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=3',
      access:'employee',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=4',
      access:'employee',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=5',
      access:'employee',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=6',
      access:'admin',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
    {
      name:'John',
      email: 'john@doe.com',
      image:'https://i.pravatar.cc/300?img=7',
      access:'guest',
      firstLogin:'25 Jan 2021',
      uid:'d76f5sdfsd67s786sdf'
    },
  ]
  ngOnInit() {}
  async manageUser(user:any){
    const manageUserPopup = await this.popoverController.create({
      component:UserInfoComponent,
      componentProps:{
        user:user
      },
    })
    await manageUserPopup.present();
  }
}
