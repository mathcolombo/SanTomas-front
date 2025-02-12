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
  template: `
    <router-outlet></router-outlet>

    <!-- Implementação do vLibras -->
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit{

  constructor(
    private iconService: IconService
  ) {}

  ngOnInit(): void {
    this.loadVLibras();
  }

  private loadVLibras(): void {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
      new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.body.appendChild(script);
  }
}
