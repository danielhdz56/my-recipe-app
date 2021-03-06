import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((action: AuthActions.TrySignup) => {
            return action.payload;
        }) // map wraps it into an observable so I can chain more observable operators
        .switchMap((authData: {username: string, password: string}) => {
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }) // fromPromise turns a promise into an observable
        .switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        }); // mergeMap allows us to merge multiple observables

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action: AuthActions.TrySignin) => {
            return action.payload;
        })
        .switchMap((authData: {username: string, password: string}) => {
            return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap(() => {
            return fromPromise(firebase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect({dispatch: false}) // false because we're not ending it with an action
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => { // allows us to execute code without stopping the observable
            this.router.navigate(['/']);
        });
    constructor(private actions$: Actions, private router: Router) {}
}

// the big difference between reducers is that we don't change the application state
// we just do something else while we handle side effects in the end
// effects depend on actions being dispatched but which doesn't change our store
