import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { containers } from './containers/index';
import { pipes } from './pipes/index';
import { components } from './components/index';
import { effects, reducers } from './store/index';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('visualization', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...containers, ...components, ...pipes],
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
