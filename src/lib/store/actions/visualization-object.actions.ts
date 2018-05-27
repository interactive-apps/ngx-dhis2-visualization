import { Action } from '@ngrx/store';
import { Visualization } from '../../models';
import { VisualizationLayer } from '../../models/visualization-layer.model';

export enum VisualizationObjectActionTypes {
  ADD_ALL_VISUALIZATION_OBJECTS = '[Visualization] Add all visualization objects',
  ADD_VISUALIZATION_OBJECT = '[Visualization] Add visualization objects',
  INITIALIZE_VISUALIZATION_OBJECT = '[Visualization] Initialize visualization object',
  UPDATE_VISUALIZATION_OBJECT = '[Visualization] Update visualization object',
  LOAD_VISUALIZATION_FAVORITE = '[Visualization] Load visualization favorite',
  LOAD_VISUALIZATION_FAVORITE_SUCCESS = '[Visualization] Load visualization favorite success',
  LOAD_VISUALIZATION_FAVORITE_FAIL = '[Visualization] Load visualization favorite fail',
}

export class AddVisualizationObjectAction implements Action {
  readonly type = VisualizationObjectActionTypes.ADD_VISUALIZATION_OBJECT;

  constructor(public visualizationObject: Visualization) {
  }
}

export class AddAllVisualizationObjectsAction implements Action {
  readonly type = VisualizationObjectActionTypes.ADD_ALL_VISUALIZATION_OBJECTS;

  constructor(public visualizationObjects: Visualization[]) {
  }
}

export class InitializeVisualizationObjectAction implements Action {
  readonly type = VisualizationObjectActionTypes.INITIALIZE_VISUALIZATION_OBJECT;

  constructor(public id: string,
    public name: string,
    public visualizationType: string,
    public visualizationLayers: VisualizationLayer[]) {
  }
}

export class UpdateVisualizationObjectAction implements Action {
  readonly type = VisualizationObjectActionTypes.UPDATE_VISUALIZATION_OBJECT;

  constructor(public id: string, public changes: Partial<Visualization>) {
  }
}

export class LoadVisualizationFavoriteAction implements Action {
  readonly type = VisualizationObjectActionTypes.LOAD_VISUALIZATION_FAVORITE;

  constructor(public visualization: Visualization) {
  }
}

export class LoadVisualizationFavoriteSuccessAction implements Action {
  readonly type = VisualizationObjectActionTypes.LOAD_VISUALIZATION_FAVORITE_SUCCESS;

  constructor(public visualization: Visualization, public favorite: any) {
  }
}

export class LoadVisualizationFavoriteFailAction implements Action {
  readonly type = VisualizationObjectActionTypes.LOAD_VISUALIZATION_FAVORITE_FAIL;

  constructor(public id: string, public error: any) {
  }
}

export type VisualizationObjectAction =
  AddVisualizationObjectAction
  | AddAllVisualizationObjectsAction
  | LoadVisualizationFavoriteAction
  | LoadVisualizationFavoriteSuccessAction
  | LoadVisualizationFavoriteFailAction
  | InitializeVisualizationObjectAction
  | UpdateVisualizationObjectAction;
