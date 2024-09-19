import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css',
})
export class TvDetailsComponent implements OnInit {
  // late
  id!: number;
  tv: any;
  constructor(private tvServiceObj: TvService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.tvServiceObj.getById(this.id).subscribe((data) => {
      this.tv = data;
      console.log(data);
      
    });
  }
}
