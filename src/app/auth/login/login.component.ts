import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  };

  
  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService) { }
  
  ngOnInit(): void {
  }
  
  login() {
    this.authService.login(this.loginData.username, this.loginData.password).subscribe({
      next: (result) => {
          if (result) {
              localStorage.setItem('currentUser', JSON.stringify(result));
              this.sessionService.loadSession();
              this.router.navigate(['/']);
          }
      },
      error: (e) => {
        console.log("Error al iniciar sesión");
      }
  });
  }
}
