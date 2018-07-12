import { VisualizationObjectEffects } from './visualization-object.effects';
import { VisualizationLayerEffects } from './visualization-layer.effects';

export const effects: any[] = [
  VisualizationObjectEffects,
  VisualizationLayerEffects
];

export * from './visualization-layer.effects';
export * from './visualization-object.effects';
