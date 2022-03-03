import { Component, OnInit } from '@angular/core';
import {Router, UrlTree} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit {

  menuState = false;
  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}
  isActive(instruction: string | UrlTree): boolean {
    return this.router.isActive(instruction, false);
  }
  logoutUser() {
    this.afAuth.signOut().then(res => {
      this.router.navigate(['/auth/login'])
    });
  }
}
