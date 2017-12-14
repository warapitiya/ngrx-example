import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as personActions from '../actions/person';
import {Person} from '../models/person';
import {HomeState} from './index';

export const personAdapter = createEntityAdapter<Person>();

export interface PersonState extends EntityState<Person> {
}

export const initialState: PersonState = personAdapter.getInitialState({
    ids: [],
    entities: []
});

export function personReducer(state: PersonState = initialState, action: personActions.Actions): PersonState {
    switch (action.type) {
        case personActions.LOAD_SUCCESS:
            return personAdapter.addOne(action.payload, state);
        case personActions.RESET:
            return personAdapter.removeAll(state);
        default:
            return state;
    }
}

// Create the default selectors
export const getPersonState = (state: HomeState) => state.person;

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = personAdapter.getSelectors(getPersonState);
