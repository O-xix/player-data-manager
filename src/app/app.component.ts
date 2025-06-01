import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
// For each component, import like so above, and...
import { AboutPageComponent } from './pages/about-page/about-page/about-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutPageComponent],
  // ...add the component to the imports array above this line.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'player-data-manager';
}
