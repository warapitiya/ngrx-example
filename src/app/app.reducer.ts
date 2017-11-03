import {ActionReducerMap} from '@ngrx/store';
import {personReducer} from './home/+store/reducers/person';

export const reducers: ActionReducerMap<any> = {
    person: personReducer
};