import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sideOptions } from '../../assets/config/sideOptions';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  navItems: any = sideOptions;
  isCollapsed = false;

  // Toggle sub-menu visibility
  toggleSubMenu(item: any) {
    item.isCollapsed = !item.isCollapsed;
  }

  // Toggle the entire side-nav collapse
  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
