import { Component, OnInit } from '@angular/core';

//FontAwesome Icons
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

  constructor() { }

  ngOnInit() {
  }

}
