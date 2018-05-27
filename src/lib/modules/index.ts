import { ChartModule } from './chart/chart.module';
// import { TableModule } from './table/table.module';
// import { ResourcesModule } from './resources/resources.module';
// import { UsersModule } from './users/users.module';
// import { ReportsModule } from './reports/reports.module';
// import { FeedbackMessageModule } from './feedback-message/feedback-message.module';
// import { WidgetModule } from './widget/widget.module';

import { DictionaryModule } from './dictionary';

export const modules: any[] = [DictionaryModule, ChartModule];

export * from './chart/chart.module';
export * from './table/table.module';
export * from './dictionary';
// export * from './resources/resources.module';
// export * from './users/users.module';
// export * from './reports/reports.module';
// export * from './feedback-message/feedback-message.module';
// export * from './widget/widget.module';
