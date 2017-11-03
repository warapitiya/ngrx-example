import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../+store/models/person';
import {Store} from '@ngrx/store';
import * as fromPerson from '../../+store/reducers/person';
import * as personActions from '../../+store/actions/person';

@Component({
    selector: 'app-home-page',
    template: `
        <div class="container">
            <div class="my-5">
                <h2>Manage</h2>
                <button class="btn btn-outline-primary" (click)="add()">ADD</button>
                <button class="btn btn-outline-dark" (click)="clear()">CLEAR</button>
            </div>
        </div>
        <div class="container">
            <h2>Collections</h2>
            <div class="row my-1" *ngFor="let person of person$ | async">
                <div class="col-md-2">
                    <img [src]="person.photo" width="60" alt="">
                </div>
                <div class="col-md-2" [innerHtml]="person.name"></div>
                <div class="col-md-1" [innerHtml]="person.age"></div>
                <div class="col-md-2" [innerHtml]="person.gender"></div>
                <div class="col-md-4" [innerHtml]="person.region"></div>
            </div>
        </div>
    `,
    styles: []
})
export class HomePageComponent implements OnInit {
    person$: Observable<Person[]>;

    constructor(private store: Store<fromPerson.State>) {
        this.person$ = store.select(fromPerson.selectAll);
    }

    ngOnInit(): void {
        this.store.dispatch(new personActions.Load());
    }

    /**
     * Add person Item
     */
    add() {
        this.store.dispatch(new personActions.Load());
    }

    /**
     * Clear Person store
     */
    clear() {
        this.store.dispatch(new personActions.Reset());
    }
}
