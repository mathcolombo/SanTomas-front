import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from "../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-core',
  standalone: true,
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  imports: [
    SidebarComponent,
    RouterOutlet,
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
