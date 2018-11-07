import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/get-users.service';
import { Client } from '../../models/Client'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  data: any[] = [];
  client: Client;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  show = false;
  

  constructor(private getUsers: GetUsersService) {}

  ngOnInit(){
    this.client = {
      name: 'John doe',
      subscription: 'basic'
    }
  }
  

  ongetUser(){
    this.getUsers.getUser()
      .subscribe(
        (users:any[])=>{
          this.loaded = true;
          this.enableAdd = true;
          this.setcurrentClasses()
          users.forEach((user)=>{
            this.data.push(user);
          })
          //console.log(this.data)
        }
      )
  }

  onaddUser(){
    this.loaded = true;
    this.data.push({
      id: this.data.length+1,
      name: 'Adriano Chelentano',
      username: 'Android',
      age: '21',
      image: 'https://picsum.photos/150/100/',
      isActive: true,
      hide: true,
    })
    console.log(this.data)
  }

  getUserImg(){
    return 'https://picsum.photos/150/100/'
  }

  setcurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }
  addUserHide(){
    this.data.forEach((el)=>{
      el.hide = false
    })
    console.log(this.data[0])
  }
  // hideUser(e){
  //   e.hide = !e.hide;
  // }

}

