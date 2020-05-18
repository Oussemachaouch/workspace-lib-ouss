/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FeatureExplorerToolbarComponent } from '../feature-explorer/feature-explorer-toolbar/feature-explorer-toolbar.component';
import { ExplorerToolbarComponent } from './explorer-toolbar.component';
import { ExplorerSharedModule } from '../shared/explorer-shared.module';
import { FeatureCreatorComponent } from '../feature-explorer/dialog/feature-creator/feature-creator.component';
export class ExplorerToolbarModule {
}
ExplorerToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [SharedModule, ExplorerSharedModule],
                declarations: [
                    FeatureExplorerToolbarComponent,
                    ExplorerToolbarComponent,
                    FeatureCreatorComponent
                ],
                exports: [
                    FeatureExplorerToolbarComponent,
                    ExplorerToolbarComponent,
                    FeatureCreatorComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXItdG9vbGJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZXhwbG9yZXItdG9vbGJhci9leHBsb3Jlci10b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbEksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFlL0csTUFBTSxPQUFPLHFCQUFxQjs7O1lBYmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUM7Z0JBQzdDLFlBQVksRUFBRTtvQkFDWiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsK0JBQStCO29CQUMvQix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBGZWF0dXJlRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS1leHBsb3Jlci9mZWF0dXJlLWV4cGxvcmVyLXRvb2xiYXIvZmVhdHVyZS1leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBsb3JlclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2V4cGxvcmVyLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGxvcmVyU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2V4cGxvcmVyLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZUNyZWF0b3JDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLWNyZWF0b3IvZmVhdHVyZS1jcmVhdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTaGFyZWRNb2R1bGUsIEV4cGxvcmVyU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmVhdHVyZUV4cGxvcmVyVG9vbGJhckNvbXBvbmVudCxcbiAgICBFeHBsb3JlclRvb2xiYXJDb21wb25lbnQsXG4gICAgRmVhdHVyZUNyZWF0b3JDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZlYXR1cmVFeHBsb3JlclRvb2xiYXJDb21wb25lbnQsXG4gICAgRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50LFxuICAgIEZlYXR1cmVDcmVhdG9yQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXhwbG9yZXJUb29sYmFyTW9kdWxlIHt9XG4iXX0=