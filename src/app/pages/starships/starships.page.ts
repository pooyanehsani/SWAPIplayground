import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  starships: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.starships = this.api.getStarships();
  }

  openDetails(starship) {
    let split = starship.url.split('/');
    let starshipId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/starships/${starshipId}`);
  }
}