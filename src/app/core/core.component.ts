import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-core',
  standalone: true,
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  imports: [
    SidebarComponent,
    RouterOutlet
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
