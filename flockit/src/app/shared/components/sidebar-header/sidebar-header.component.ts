import { Component, OnInit } from '@angular/core';
import {Router, UrlTree} from "@angular/router";

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit {

  menuState = false;
  constructor(private router: Router) { }

  ngOnInit() {}
  isActive(instruction: string | UrlTree): boolean {
    return this.router.isActive(instruction, false);
  }
  logoutUser() {

  }
}
