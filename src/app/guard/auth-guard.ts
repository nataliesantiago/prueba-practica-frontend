import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../services/session.service'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private sessionService: SessionService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.sessionService.isAuthenticated()) {
            // ususario logueado
            return true;
        }
        // usuario no logueado
        this.router.navigate(['/login']);
        return false;
    }
}