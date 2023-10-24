import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  showLabel: boolean = false;

  toggleShow() {
    this.showLabel = !this.showLabel;
  }

  setFalse() {
    this.showLabel = false;
  }
}
