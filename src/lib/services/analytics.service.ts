import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VisualizationDataSelection } from '../models/visualization-data-selection.model';
import { getAnalyticsUrl } from '../helpers';
import { NgxDhis2HttpClientService } from 'ngx-dhis2-http-client';

@Injectable()
export class AnalyticsService {
  constructor(private http: NgxDhis2HttpClientService) {
  }

  getAnalytics(dataSelections: VisualizationDataSelection[], layerType: string, config?: any): Observable<any> {
    const analyticsUrl = (layerType === 'thematic' || layerType === 'event') ?
                         getAnalyticsUrl(dataSelections, layerType, config) :
                         '';
    return analyticsUrl !== '' ? this.http.get(`/api/${analyticsUrl}`, true) : of(null);

  }
}
