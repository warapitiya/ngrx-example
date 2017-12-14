import {Action} from '@ngrx/store';
import {Person} from '../models/person';

export const LOAD = '[Person] Load Person';
export const LOAD_SUCCESS = '[Person] Load Person success';
export const LOAD_FAIL = '[Person] Load Person fail';
export const RESET = '[Person] Person Reset';

export class LoadPerson implements Action {
    readonly type = LOAD;

    constructor() {
    }
}

export class LoadPersonSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Person) {
    }
}

export class LoadPersonFail implements Action {
    readonly type = LOAD_FAIL;
}

export class ResetPerson implements Action {
    readonly type = RESET;

    constructor() {
    }
}

export type Actions
    = ResetPerson
    | LoadPerson
    | LoadPersonSuccess
    | LoadPersonFail;