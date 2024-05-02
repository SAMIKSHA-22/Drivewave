import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _login: LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        let token = this._login.getToken();

        if (token != null) {
            authRequest = authRequest.clone(
            {
                setHeaders: {Authorization: `Bearer ${token}`},
            }
            );  
        }
        return next.handle(authRequest);
    }
}

export const authInterceprotProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
]