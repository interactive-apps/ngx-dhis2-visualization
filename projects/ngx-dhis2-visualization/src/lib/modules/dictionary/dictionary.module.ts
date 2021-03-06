import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DictionaryListComponent } from './components/dictionary-list/dictionary-list.component';
import { DictionaryProgressComponent } from './components/dictionary-progress/dictionary-progress.component';
import { dictionaryReducers, dictionaryEffects } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('dictionary', dictionaryReducers),
    EffectsModule.forFeature(dictionaryEffects)
  ],
  declarations: [DictionaryListComponent, DictionaryProgressComponent],
  exports: [DictionaryListComponent, DictionaryProgressComponent],
  providers: [DatePipe]
})
export class DictionaryModule {}
