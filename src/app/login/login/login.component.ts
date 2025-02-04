import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.get<any[]>('/assets/users.json').subscribe(users => {
      const user = users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // ✅ Store user data
        this.router.navigate(['/pages/dashboard']); // ✅ Navigate to Dashboard
      } else {
        this.errorMessage = 'Invalid email or password!';
      }
    });
  }
}
