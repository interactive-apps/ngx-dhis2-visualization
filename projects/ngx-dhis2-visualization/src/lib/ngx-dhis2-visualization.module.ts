import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// store
import { reducers } from './store/reducers/index';
import { pipes } from './pipes/index';
import { components } from './components/index';
import { containers } from './containers/index';
import { VisualizationObjectEffects } from './store/effects/visualization-object.effects';
import { VisualizationLayerEffects } from './store/effects/visualization-layer.effects';
import { ChartModule } from './modules/chart/chart.module';
import { TableModule } from './modules/table/table.module';
import { DictionaryModule } from './modules/dictionary/dictionary.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('visualization', reducers),
    EffectsModule.forFeature([
      VisualizationObjectEffects,
      VisualizationLayerEffects
    ]),
    ChartModule,
    TableModule,
    DictionaryModule
  ],
  declarations: [...pipes, ...components, ...containers],
  exports: [...containers]
})
export class NgxDhis2VisualizationModule {
  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: NgxDhis2VisualizationModule,
  //     providers: []
  //   };
  // }
  // public static forChild(): ModuleWithProviders {
  //   return {
  //     ngModule: NgxDhis2VisualizationModule,
  //     providers: []
  //   };
  // }
}
