import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import {HeroService} from '../hero.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userArray : any = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.heroService.getUsers().subscribe(res => {

      console.log(res.length);
      for(let i =0; i < res.length; i++) {
        this.userArray.push(res[i]);
      }

    });
    console.log(this.userArray);
    // console.log(this.userArray[0]);
    // for(let key in this.userArray.values()) {
    //    // @ts-ignore
    //   for(let data in key) {
    //     console.log("In loop");
    //      console.log(data)
    //    }
    // }
    }

  }
