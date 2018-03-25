import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken: string = this.auth.getAuthToken();
        request = request.clone({
            setHeaders: {
                Authorization: authToken
            }
        });
        return next.handle(request);
            /*if (event instanceof HttpResponse) {
                const response: HttpResponse<any> = event;
                event = response.clone({
                    headers: response.headers.set('WWW-Authenticate', 'None')
                });
            }
            return event;
        });*/
    }
}
