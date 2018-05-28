# DHIS2 Visualization library

## installation

`npm install ngx-dhis2-visualization`

## Usage

If the module is to be imported in the app.module, then import as 

`import { NgxDhis2VisualizationModule } from 'ngx-dhis2-visualization';`

then add this in the imports
```
imports: [
    ...
    NgxDhis2VisualizationModule.forRoot(),
    ...
    ]
```

If the module is to be imported in other modules, then add this in the imports
```
imports: [
    ...
    NgxDhis2VisualizationModule.forChild(),
    ...
    ]
```

Once imported, visualization card can be called in as 

```
<ngx-dhis2-visualization
  [id]="'visualizationId'"
  [type]="'CHART'"
  [name]="'Visualization'"
  [visualizationLayers]="visualizationLayers"
></ngx-dhis2-visualization>
```

where
 - id: unique id for visualization
 - type: type of visualization eg. CHART, TABLE, MAP, INFO etc
 - name: name for visualization
 - visualizationLayers: content for the visualization, this is an array whose format is
  ```
  [{
    id: string;
    analytics?: Analytics;
    dataSelections?: VisualizationDataSelection[];
    layout?: VisualizationLayout;
    metadataIdentifiers?: Array<string>;
    layerType?: string;
    config?: {[name: string]: any};
  }]
  ```
  where
  - Analytics has format
  ```
  {
    headers?: any[];
    metaData?: any;
    rows: Array<any[]>;
  }
  ```
  - VisualizationDataSelection has format
  ```
   {
     dimension: string;
     name: string;
     layout?: string;
     filter?: string;
     optionSet?: any;
     legendSet?: string;
     items: Array<{
       id: string;
       name: string;
       type: string;
     }>;
   }
  ```
  - VisualizationLayout has format
  ```
  {
    rows: Array<string>;
    columns: Array<string>;
    filters: Array<string>;
    excluded?: Array<string>;
  }
  ```
  
  
