import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pageTitle = 'Dashboard'; // Default title

  constructor(private router: Router) {
    this.updateNavbar(this.router.url);
  }

  updateNavbar(url: string) {
    this.pageTitle = url.includes('/pages/home') ? 'Home' : 'Dashboard';
  }

  navigateToDashboard() {
    this.router.navigate(['/pages/dashboard']);
  }

  navigateToHome() {
    this.router.navigate(['/pages/home']);
  }
}
