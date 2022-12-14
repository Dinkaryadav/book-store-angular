import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam['name'];
    })
  }
  goToSignUp(): void{
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(): void{
    this.router.navigate(['/public/book-details',100,'author',1001]);
  }
}
