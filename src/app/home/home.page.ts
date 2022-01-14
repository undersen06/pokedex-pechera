import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      debugger;
      if (this.router.getCurrentNavigation().extras.state) {
        // this.foo = this.router.getCurrentNavigation().extras.state.foo;
      }
    });
  }

  ngOnInit() {
  }

}
