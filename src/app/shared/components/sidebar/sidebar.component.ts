import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isExpanded: boolean = false;

  @Output('toogle') toggleSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isExpanded = true;
    this.toggleSidebar.emit(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isExpanded = false;
    this.toggleSidebar.emit(false);
  }
}
