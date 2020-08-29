import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ManagementService } from '../admin/management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sess: any;
  logoutPressed = false;
  permission = false;

  constructor(private http: HttpClient, private managementservice: ManagementService) { }

  ngOnInit(): void {
    this.permission = false;
    this.userPermission();
  }

  ngAfterContentChecked(): void {
    this.sess = localStorage.getItem("User");
  }

  logout() {
    this.logoutPressed = true;
    // localStorage.removeItem("User");
    // this.sessionClear();
  }

  userUrl = 'http://localhost:4000/auth/';
  sessionClear(): void{
    this.http.get(this.userUrl + 'logout/').subscribe(() => {
    });
  }

  userPermission() {
    this.managementservice.getPermission().toPromise().then(data => {
      if(data.permission === 'admin' || data.permission === 'moderator') {
        this.permission = true;
      } else {
        this.permission = false;
      }
    });
  }

}
