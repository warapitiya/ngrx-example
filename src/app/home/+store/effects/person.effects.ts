import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as personActions from './../actions/person';
import {PersonService} from '../../services/person.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Person} from '../models/person';

@Injectable()
export class PersonEffects {

    constructor(private personService: PersonService,
                private actions$: Actions) {
    }

    @Effect()
    load$ = this.actions$.ofType(personActions.LOAD).pipe(
        switchMap(() => {
            return this.personService
                .getPerson()
                .pipe(
                    map((person: Person) => ({
                        ...{
                            id: new Date().getTime()
                        },
                        ...person
                    })),
                    map((result: Person) => new personActions.LoadPersonSuccess(result)),
                    catchError(error => {
                        console.error('Check error ', error);
                        return of(new personActions.LoadPersonFail());
                    })
                )
        })
    );


}
