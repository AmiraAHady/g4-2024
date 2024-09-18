import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // component directive
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule,DatePipe,UpperCasePipe],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  searchVal: string = 'ramy';
  constructor() {}
   
  ngOnInit() {
  }

  movieData = {
    adult: false,
    backdrop_path:
      'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg',
    belongs_to_collection: {
      id: 448150,
      name: 'Deadpool Collection',
      poster_path: '/30c5jO7YEXuF8KiWXLg9m28GWDA.jpg',
      backdrop_path: '/hBQOWY8qWXJVFAc8yLTh1teIu43.jpg',
    },
    budget: 200000000,
    genres: [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 35,
        name: 'Comedy',
      },
      {
        id: 878,
        name: 'Science Fiction',
      },
    ],
    homepage: 'https://www.marvel.com/movies/deadpool-and-wolverine',
    id: 533535,
    imdb_id: 'tt6263850',
    origin_country: ['US'],
    original_language: 'en',
    original_title: 'Deadpool & Wolverine',
    overview:
      'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
    popularity: 2838.675,
    poster_path:
      'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    production_companies: [
      {
        id: 420,
        logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
        name: 'Marvel Studios',
        origin_country: 'US',
      },
      {
        id: 104228,
        logo_path: '/hx0C1XcSxGgat8N62GpxoJGTkCk.png',
        name: 'Maximum Effort',
        origin_country: 'US',
      },
      {
        id: 2575,
        logo_path: '/9YJrHYlcfHtwtulkFMAies3aFEl.png',
        name: '21 Laps Entertainment',
        origin_country: 'US',
      },
      {
        id: 127928,
        logo_path: '/h0rjX5vjW5r8yEnUBStFarjcLT4.png',
        name: '20th Century Studios',
        origin_country: 'US',
      },
      {
        id: 176762,
        logo_path: null,
        name: 'Kevin Feige Productions',
        origin_country: 'US',
      },
      {
        id: 22213,
        logo_path: '/qx9K6bFWJupwde0xQDwOvXkOaL8.png',
        name: 'TSG Entertainment',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '2024-07-24',
    revenue: 1304995644,
    runtime: 128,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'Come together.',
    title: 'Deadpool & Wolverine',
    video: true,
    vote_average: 7.71,
    vote_count: 2881,
  };

  watchMovie() {
    console.log(`user want to watch movie `);
  }
}
