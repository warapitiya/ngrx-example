import {Action} from '@ngrx/store';
import {Person} from '../models/person';

export const LOAD = '[Person] Load';
export const LOAD_SUCCESS = '[Person] Load success';
export const LOAD_FAIL = '[Person] Load fail';
export const INSERT = '[Person] Insert';
export const REMOVE = '[Person] Remove';
export const RESET = '[Counter] Reset';

export class Load implements Action {
    readonly type = LOAD;

    constructor() {
    }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Person) {
    }
}

export class LoadFail implements Action {
    readonly type = LOAD_FAIL;

    constructor() {
    }
}

export class Insert implements Action {
    readonly type = INSERT;

    constructor(public payload: Person) {
    }
}

export class Remove implements Action {
    readonly type = REMOVE;

    constructor(public payload: Person) {
    }
}

export class Reset implements Action {
    readonly type = RESET;

    constructor() {
    }
}

export type Actions
    = Insert
    | Remove
    | Reset
    | Load
    | LoadSuccess
    | LoadFail;