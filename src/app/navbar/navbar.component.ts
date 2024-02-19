import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public router:Router) {
  }
}
