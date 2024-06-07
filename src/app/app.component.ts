import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";
  
  userData = {
    email: 'joaquimrodrigues@gmail.com',
    role: 'Admin',
  }

  title = 'project';

  
}


