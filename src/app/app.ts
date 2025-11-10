import { Component, signal } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatTabsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Solana Project 1');

    activeLink = 'home';
    links = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About' }
    ];
}
