import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store/reducers';
import { effects } from './store/effects/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RoutingModule } from './app.routes';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouteSerializer } from './utils/route-serializer.util';
import { NgxDhis2VisualizationModule } from 'ngx-dhis2-visualization';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgxDhis2VisualizationModule.forRoot(),
    /**
     * Reducers
     */
    StoreModule.forRoot(reducers, {metaReducers}),

    /**
     * Effects
     */
    EffectsModule.forRoot(effects),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store
     */
    StoreRouterConnectingModule,

    /**
     * Dev tool, enabled only in development mode
     */
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: RouteSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
