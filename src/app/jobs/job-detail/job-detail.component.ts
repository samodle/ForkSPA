import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';
import {AlertifyService} from '../../_services/alertify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser(this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error =>{
      this.alertify.error(error);
    });
  }
}
