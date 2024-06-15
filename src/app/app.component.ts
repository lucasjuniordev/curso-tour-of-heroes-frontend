import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show: boolean = false;

  constructor(private routes: Router) {

  }

  ngOnInit(): void {
     if (this.routes.url === '/heroes') {
       this.show = true;
    }

  }


  userName = "Joaquim";

  userData = {
    email: 'joaquimrodrigues@gmail.com',
    role: 'Admin',
  }

  title = 'Site Tour of Heroes';
}


