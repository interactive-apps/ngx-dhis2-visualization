import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NgxDhis2ChartModule } from '@hisptz/ngx-dhis2-chart';
import { NgxDhis2TableModule } from '@hisptz/ngx-dhis2-table';

// store
import { reducers } from './store/reducers';
import { pipes } from './pipes';
import { components } from './components';
import { containers } from './containers';
import { VisualizationObjectEffects } from './store/effects/visualization-object.effects';
import { VisualizationLayerEffects } from './store/effects/visualization-layer.effects';
import { DictionaryModule } from './modules/dictionary/dictionary.module';
import { MapModule } from './modules/map/map.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    StoreModule.forFeature('visualization', reducers),
    EffectsModule.forFeature([
      VisualizationObjectEffects,
      VisualizationLayerEffects
    ]),
    NgxDhis2ChartModule,
    NgxDhis2TableModule,
    DictionaryModule,
    MapModule
  ],
  declarations: [...pipes, ...components, ...containers],
  exports: [...containers]
})
export class NgxDhis2VisualizationModule {}
