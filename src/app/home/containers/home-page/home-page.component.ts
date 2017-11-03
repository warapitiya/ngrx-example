import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../+store/models/person';
import {Store} from '@ngrx/store';
import * as fromPerson from '../../+store/reducers/person';
import * as personActions from '../../+store/actions/person';

@Component({
    selector: 'app-home-page',
    template: `
        <section class="section">
            <div class="columns">
                <div class="column">
                    <div class="title">
                        <h2>Manage</h2>
                    </div>
                    <button class="button is-primary" (click)="add()">ADD</button>
                    <button class="button is-link">UPDATE(SOON)</button>
                    <button class="button is-warning" (click)="clear()">CLEAR</button>
                    <button class="button is-black" (click)="github()">GITHUB</button>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="title">
                        <h2>Collections</h2>
                    </div>
                </div>
            </div>
            <div class="columns" *ngFor="let person of person$ | async">
                <div class="column">
                    <img [src]="person.photo" width="64" alt="">
                </div>
                <div class="column">
                    <p [innerHtml]="person.name"></p>
                </div>
                <div class="column">
                    <div class="tags has-addons">
                        <span class="tag is-black">age</span>
                        <span class="tag is-primary" [innerHtml]="person.age"></span>
                    </div>
                </div>
                <div class="column">
                    <p><span class="tag"
                             [ngClass]="{'is-info': person.gender === 'male', 'is-danger': person.gender === 'female'}"
                             [innerHtml]="person.gender"></span></p>
                </div>
                <div class="column">
                    <p [innerHtml]="person.region"></p>
                </div>
            </div>
        </section>
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

    /**
     * Go to github repo
     */
    github() {
        window.location.href = 'https://github.com/warapitiya/ngrx-example';
    }
}
