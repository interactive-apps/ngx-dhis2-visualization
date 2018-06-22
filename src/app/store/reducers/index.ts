

import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
  route: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  route: routerReducer
};

export const getRootState = (state: AppState) => state;

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
