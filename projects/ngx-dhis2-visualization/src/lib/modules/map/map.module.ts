import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store/index';
// containers
import * as fromContainers from './containers/index';
// components
import * as fromComponents from './components/index';

import * as fromServices from './services/index';

import { NgxPaginationModule } from 'ngx-pagination';

// Filters Modules
import * as Filters from './modules/index';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ...Filters.modules,
    StoreModule.forFeature('map', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class MapModule {}
