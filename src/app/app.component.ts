import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private iconService: IconService
  ) {}

  ngOnInit(): void {
    this.carregarVLibras();
  }

  private carregarVLibras(): void {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
      new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.body.appendChild(script);
  }
}
