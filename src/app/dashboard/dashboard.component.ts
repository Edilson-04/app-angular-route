import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private route: ActivatedRoute, private router: Router) {

  }

  onNavigateToHomePage(): void {
    this.router.navigate(['home'], { relativeTo: this.route })
  }

  onNavigateToProductPage(): void {
    this.router.navigate(['producto'], { relativeTo: this.route })
  }

  onNavigateToCoursePage(): void {
    this.router.navigate(['curso'], { relativeTo: this.route })
  }


}


