import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
// Decorator
@Component({
  selector: 'app-root',
  standalone: true,
  // dependencies
  imports: [NavBarComponent, FooterComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
