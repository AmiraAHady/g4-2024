import { DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [NgClass, NgStyle, DecimalPipe, RouterLink],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css',
})
export class TvListComponent implements OnInit {
  tvShowList: any[] = [];
  // Dependency injection
  constructor(private tvServiceObj: TvService) {}

  ngOnInit() {
    this.tvServiceObj.getAllTvs().subscribe((data) => {
      this.tvShowList=data.results
    });
  }
}
