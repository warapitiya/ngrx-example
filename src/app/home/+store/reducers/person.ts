import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as personActions from '../actions/person';
import {Person} from '../models/person';
import {createFeatureSelector} from '@ngrx/store';

export const personAdapter = createEntityAdapter<Person>();

export interface State extends EntityState<Person> {
}

const defaultPerson = {};

export const initialState: State = personAdapter.getInitialState(defaultPerson);

export function personReducer(state: State = initialState, action: personActions.Actions): State {
    switch (action.type) {
        case personActions.LOAD_SUCCESS:
        case personActions.INSERT:
            return personAdapter.addOne(action.payload, state);
        case personActions.RESET:
            return personAdapter.removeAll(state);
        default:
            return state;
    }
}

// Create the default selectors
export const getPersonState = createFeatureSelector<State>('person');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = personAdapter.getSelectors(getPersonState);
