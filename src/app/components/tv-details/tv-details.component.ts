import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css',
})
export class TvDetailsComponent implements OnInit {
  // late
  id!: number;
  tv: any;
  // activatedRoute
  // Dependency injection
  constructor(private tvServiceObj: TvService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id=Number(this.route.snapshot.paramMap.get('id'))
    this.tv = this.tvServiceObj.getById(this.id);
  }
}
