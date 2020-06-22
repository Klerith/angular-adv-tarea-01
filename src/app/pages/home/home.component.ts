import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor( private authService: AuthService ) { }

}
