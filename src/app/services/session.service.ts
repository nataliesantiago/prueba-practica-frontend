import {Injectable} from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { CurrentUser, TokenInfo } from './current-user.interfaace';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private currentUser!: CurrentUser;
    private decodedToken!: TokenInfo;

    constructor() {
        this.loadSession();
    }

    loadSession(): void {
        try {
          const storedUser = localStorage.getItem('currentUser');

          if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as CurrentUser;
          } else {
            console.error('No se encontró información de usuario en el almacenamiento local.');
          }
            
        if (this.currentUser.token) {
          this.decodedToken = jwtDecode(this.currentUser.token) as TokenInfo;
        }

        } catch (error) {
        }
    }

    isAuthenticated(): boolean {
      return (
        !!this.currentUser &&
        !!this.decodedToken
      );
    }

    getScopes(): string[] {
        if (!this.decodedToken) {
            return [];
        }
        return this.decodedToken.permissions as string[];
    }

    getUser(): CurrentUser {
        return this.currentUser;
    }

}

