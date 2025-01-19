import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authKey: string = '';
  alertMessage: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  login() {
    if (this.authKey.trim()) {
      this.apiService.setAuthKey(this.authKey);
      this.router.navigate(['/products']);
    } else {
      this.alertMessage = 'Authorization key cannot be empty.';
    }
  }
}
