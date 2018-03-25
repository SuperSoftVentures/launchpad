import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticatedGaurd implements CanActivate {
    constructor(private as: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        if (!this.as.isAuthenticated()) {
            this.router.navigate(['auth/login'], {
                queryParams: {
                    redirect: state.url
                }
            });
            return false;
        }
        return true;
    }
}
