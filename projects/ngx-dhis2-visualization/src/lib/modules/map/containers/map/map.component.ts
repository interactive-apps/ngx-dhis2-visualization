import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import * as fromStore from '../../store';
import { Layer } from '../../models/layer.model';
import * as fromUtils from '../../utils';
import { VisualizationObject } from '../../models/visualization-object.model';

@Component({
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html'
})
export class MapComponent implements OnChanges {
  @Input() vizObject;
  @Input() visualizationLayers: any;
  @Input() visualizationConfig: any;
  @Input() visualizationUiConfig: any;
  visualizationObject: VisualizationObject;
  componentId: string;
  displayConfigurations: any;
  public visualizationObject$: Observable<VisualizationObject>;
  constructor(private store: Store<fromStore.MapState>) {
    this.store.dispatch(new fromStore.LoadAllLegendSet());
    this.store.dispatch(new fromStore.AddContectPath());
  }

  ngOnChanges(changes: SimpleChanges) {
    const { vizObject } = changes;

    if (vizObject) {
      this.visualizationUiConfig = {
        height: this.vizObject.details.cardHeight,
        width: this.vizObject.details.cardWidth,
        fullScreen: this.vizObject.details.fullScreen
      };
      const { details, layers, name, id } = this.vizObject;
      this.visualizationLayers = [...layers];
      this.visualizationConfig = { ...details, name, id };

      // End of code to be deleted and use input;
      this.componentId = id;
      this.displayConfigurations = {
        itemHeight: this.visualizationUiConfig.height,
        mapWidth: '100%'
      };
      this.store.dispatch(new fromStore.InitiealizeVisualizationLegend(this.vizObject.id));

      this.transformVisualizationObject(this.visualizationConfig, this.visualizationLayers);
      this.visualizationObject$ = this.store.select(fromStore.getCurrentVisualizationObject(this.vizObject.id));
    }
  }

  getVisualizationObject() {
    this.visualizationObject$ = this.store.select(fromStore.getCurrentVisualizationObject(this.componentId));
  }

  transhformFavourites(favourite) {
    const { visObject } = fromUtils.transformFavourites(favourite);
    this.visualizationObject = {
      ...this.visualizationObject,
      componentId: this.componentId,
      ...visObject
    };

    if (visObject['layers'].length) {
      this.store.dispatch(new fromStore.CreateVisualizationObject(this.visualizationObject));
      this.getVisualizationObject();
    }
  }

  transformVisualizationObject(visualizationConfig, visualizationLayers) {
    // TODO FIND A WAY TO GET GEO FEATURES HERE
    const { visObject } = fromUtils.transformVisualizationObject(visualizationConfig, visualizationLayers);
    this.visualizationObject = {
      ...this.visualizationObject,
      componentId: this.componentId,
      ...visObject
    };
    this.store.dispatch(new fromStore.AddVisualizationObjectComplete(this.visualizationObject));
  }

  toggleLegendContainerView() {
    this.store.dispatch(new fromStore.ToggleOpenVisualizationLegend(this.componentId));
  }
}
