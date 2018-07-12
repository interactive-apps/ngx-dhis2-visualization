import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';

import { VisualizationDataSelection } from '../models/index';
import { getAnalyticsUrl } from '../helpers/index';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getAnalytics(
    dataSelections: VisualizationDataSelection[],
    layerType: string,
    config?: any
  ): Observable<any> {
    const analyticsUrl =
      layerType === 'thematic' || layerType === 'event'
        ? getAnalyticsUrl(dataSelections, layerType, config)
        : '';
    return analyticsUrl !== '' ? this.http.get(analyticsUrl, true) : of(null);
  }
}
