import { Dictionary } from '../../models/dictionary';
import { ActionReducerMap, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import * as fromDictionary from './dictionary.reducer';

export interface State {
  dictionary: Dictionary[];
}

export const dictionaryReducers: ActionReducerMap<State> = {
  dictionary: fromDictionary.dictionaryReducer
};

export const getDictionaryState = createFeatureSelector<State>('dictionary');
