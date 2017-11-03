import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as personActions from './../actions/person';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Person} from '../models/person';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonEffects {

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(personActions.LOAD)
        .switchMap(() => {
                return this.http.get('https://uinames.com/api/?ext')
                    .map((result: Person) => ({
                        ...{
                            id: new Date().getTime()
                        },
                        ...result
                    }))
                    .map((result: Person) => new personActions.LoadSuccess(result));
            }
        );

    constructor(private http: HttpClient,
                private actions$: Actions) {
    }

}
