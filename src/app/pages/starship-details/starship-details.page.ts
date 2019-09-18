import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.page.html',
  styleUrls: ['./starship-details.page.scss'],
})
export class StarshipDetailsPage implements OnInit {
  starship: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getStarship(id).subscribe(res => {
      this.starship = res;
    });
  }
}
