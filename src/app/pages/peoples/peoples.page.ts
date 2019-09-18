import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.page.html',
  styleUrls: ['./peoples.page.scss'],
})
export class PeoplesPage implements OnInit {

  peoples: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.peoples = this.api.getPeoples();
  }

  openDetails(people) {
    let split = people.url.split('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/peoples/${peopleId}`);
  }
}
