import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tv', component: TvListComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'tvDetail/:id', component: TvDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
