import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted', req);
        return this.store.select('auth')
            .take(1) // this means to only take the value once
            .switchMap((authState: fromAuth.State) => { // switchMap doesn't wrap it into an observable
                const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
                return next.handle(copiedReq); // this lets the request continue
            });
    }
}