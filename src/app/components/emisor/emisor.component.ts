import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService)
  }

}
