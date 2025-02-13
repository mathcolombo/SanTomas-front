import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-core',
  standalone: true,
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  imports: [
    SidebarComponent,
    RouterOutlet,
    CommonModule
  ]
})
export class CoreComponent implements OnInit {

  isSidebarExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  onSidebarToggle(expanded: boolean) {
    this.isSidebarExpanded = expanded;
  }
}
