import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SideNavComponent,
    HeaderComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Billing_Web_UI';
}
