import {Component} from'@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/components/auth/login.component.html'
})

export class LoginComponent {
    message:string;

    constructor(public authService:AuthService, public router:Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}