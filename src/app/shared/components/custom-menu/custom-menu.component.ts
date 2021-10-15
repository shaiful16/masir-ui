import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { Router } from '@angular/router';
import {CustomNavService} from '../../services/custom-nav.service';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.scss']
})
export class CustomMenuComponent implements OnInit {

  public menuItems: Menu[];

  constructor(private router: Router, public customNavServices: CustomNavService) {
    this.customNavServices.items.subscribe(menuItems => this.menuItems = menuItems );
    this.router.events.subscribe((event) => {
      this.customNavServices.mainMenuToggle = false;
    });
  }

  ngOnInit(): void {
  }

  mainMenuToggle(): void {
    this.customNavServices.mainMenuToggle = !this.customNavServices.mainMenuToggle;
  }

  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }

}
