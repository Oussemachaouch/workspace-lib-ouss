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
var ExplorerToolbarModule = /** @class */ (function () {
    function ExplorerToolbarModule() {
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
    return ExplorerToolbarModule;
}());
export { ExplorerToolbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXItdG9vbGJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvZXhwbG9yZXItdG9vbGJhci9leHBsb3Jlci10b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbEksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFFL0c7SUFBQTtJQWFvQyxDQUFDOztnQkFicEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDN0MsWUFBWSxFQUFFO3dCQUNaLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUN4QjtpQkFDRjs7SUFDbUMsNEJBQUM7Q0FBQSxBQWJyQyxJQWFxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZUV4cGxvcmVyVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUtZXhwbG9yZXIvZmVhdHVyZS1leHBsb3Jlci10b29sYmFyL2ZlYXR1cmUtZXhwbG9yZXItdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBsb3Jlci10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBsb3JlclNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9leHBsb3Jlci1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEZlYXR1cmVDcmVhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS1leHBsb3Jlci9kaWFsb2cvZmVhdHVyZS1jcmVhdG9yL2ZlYXR1cmUtY3JlYXRvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBFeHBsb3JlclNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZlYXR1cmVFeHBsb3JlclRvb2xiYXJDb21wb25lbnQsXG4gICAgRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50LFxuICAgIEZlYXR1cmVDcmVhdG9yQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGZWF0dXJlRXhwbG9yZXJUb29sYmFyQ29tcG9uZW50LFxuICAgIEV4cGxvcmVyVG9vbGJhckNvbXBvbmVudCxcbiAgICBGZWF0dXJlQ3JlYXRvckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV4cGxvcmVyVG9vbGJhck1vZHVsZSB7fVxuIl19