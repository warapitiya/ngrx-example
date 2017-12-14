/**
 * Created by mwarapitiya on 12/14/17.
 */

import * as fromPerson from './person.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface HomeState {
    person: fromPerson.PersonState
}

export const reducers: ActionReducerMap<HomeState> = {
    person: fromPerson.personReducer
};

export const getPersonState = createFeatureSelector<HomeState>('person');

export const getPeople = createSelector(
    getPersonState,
    (state: HomeState) => state.person
);

export const abc = createSelector(
    getPersonState,
    fromPerson.selectAll
);