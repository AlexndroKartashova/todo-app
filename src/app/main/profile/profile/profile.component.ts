import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/main/apps/todo/todo.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ProfileComponent implements OnInit {


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {

  }

  
}
