import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes'

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filtro: filtrosValidos){}
}

export type acciones = SetFilterAction;