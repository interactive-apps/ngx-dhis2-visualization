import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { containers } from './containers/index';
import { pipes } from './pipes/index';
import { components } from './components/index';
import { effects, reducers } from './store/index';
import { services } from './services/index';
import { DictionaryModule } from './modules/index';
import { ChartModule } from './modules/chart/chart.module';
import { TableModule } from './modules/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    DictionaryModule.forChild(),
    ChartModule,
    TableModule,
    StoreModule.forFeature('visualization', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...containers, ...components, ...pipes],
  exports: [...containers]
})
export class NgxDhis2VisualizationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2VisualizationModule,
      providers: [...services]
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2VisualizationModule,
      providers: [...services]
    };
  }
}
