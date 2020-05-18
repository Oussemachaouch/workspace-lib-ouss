/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExplorerModule } from './explorer/explorer.module';
import { WidgetsStoreComponent, WidgetComponent } from './widgets-store';
import { CoreModule } from '../core';
import { PreviewModule } from './preview/preview.module';
import { StoreSelectorComponent } from './widgets-store/store-selector/store-selector.component';
import { StoreDisplayerComponent } from './widgets-store/store-displayer/store-displayer.component';
import { WidgetsToScreenSwitcherComponent } from './widgets-store/widgets-to-screen-switcher/widgets-to-screen-switcher.component';
import { WidgetsToScreenSwitcherService } from './widgets-store/widgets-to-screen-switcher/widgets-to-screen-switcher.service';
import { ScreensStoreComponent } from './widgets-store/screens-store/screens-store.component';
import { ExplorerToolbarModule } from './explorer/explorer-toolbar/explorer-toolbar.module';
import { CreateTemplateComponent } from './preview/create-template/create-template.component';
import { SearchTemplateComponent } from './preview/search-template/search-template.component';
import { SimulateTemplateComponent } from './preview/simulate-template/simulate-template.component';
import { DesignSpaceComponent } from './preview/design-space/design-space.component';
import { ImportTemplateComponent } from './preview/import-template/import-template.component';
import { StoreManagementComponent } from './preview/store-management/store-management.component';
import { RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { PanelMenuModule } from 'primeng/panelmenu';
/** @type {?} */
var appRoutes = [
    { path: 'createTemplate', component: CreateTemplateComponent },
    { path: 'searchTemplate', component: SearchTemplateComponent },
    { path: 'simulateTemplate', component: SimulateTemplateComponent },
    { path: 'designSpace', component: DesignSpaceComponent },
    { path: 'importTemplate', component: ImportTemplateComponent },
    { path: 'store', component: StoreManagementComponent },
    { path: '', component: PreviewComponent }
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [SharedModule, ExplorerModule, CoreModule,
                        PanelMenuModule,
                        RouterModule.forRoot(appRoutes)],
                    declarations: [
                        WidgetComponent,
                        WidgetsStoreComponent,
                        StoreSelectorComponent,
                        StoreDisplayerComponent,
                        WidgetsToScreenSwitcherComponent,
                        ScreensStoreComponent
                    ],
                    exports: [
                        ExplorerModule,
                        ExplorerToolbarModule,
                        WidgetsStoreComponent,
                        WidgetsToScreenSwitcherComponent,
                        PreviewModule,
                    ],
                    providers: [WidgetsToScreenSwitcherService]
                },] }
    ];
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUcsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbkksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDL0gsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDL0YsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7SUFDNUMsU0FBUyxHQUFXO0lBQ3hCLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFHLFNBQVMsRUFBRSx1QkFBdUIsRUFBQztJQUM3RCxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRyxTQUFTLEVBQUUsdUJBQXVCLEVBQUM7SUFDN0QsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsU0FBUyxFQUFFLHlCQUF5QixFQUFDO0lBQ2pFLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRyxTQUFTLEVBQUUsb0JBQW9CLEVBQUM7SUFDdkQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUcsU0FBUyxFQUFFLHVCQUF1QixFQUFDO0lBQzdELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUM7SUFDcEQsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFHLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztDQUN6QztBQUNEO0lBQUE7SUFzQitCLENBQUM7O2dCQXRCL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsVUFBVTt3QkFDaEQsZUFBZTt3QkFDZixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNsQyxZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLGdDQUFnQzt3QkFDaEMsYUFBYTtxQkFFZDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O0lBQzhCLHVCQUFDO0NBQUEsQUF0QmhDLElBc0JnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBFeHBsb3Jlck1vZHVsZSB9IGZyb20gJy4vZXhwbG9yZXIvZXhwbG9yZXIubW9kdWxlJztcbmltcG9ydCB7IFdpZGdldHNTdG9yZUNvbXBvbmVudCwgIFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy1zdG9yZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBQcmV2aWV3TW9kdWxlIH0gZnJvbSAnLi9wcmV2aWV3L3ByZXZpZXcubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMtc3RvcmUvc3RvcmUtc2VsZWN0b3Ivc3RvcmUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlRGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzLXN0b3JlL3N0b3JlLWRpc3BsYXllci9zdG9yZS1kaXNwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldHNUb1NjcmVlblN3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzLXN0b3JlL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyL3dpZGdldHMtdG8tc2NyZWVuLXN3aXRjaGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRzVG9TY3JlZW5Td2l0Y2hlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldHMtc3RvcmUvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIvd2lkZ2V0cy10by1zY3JlZW4tc3dpdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTY3JlZW5zU3RvcmVDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMtc3RvcmUvc2NyZWVucy1zdG9yZS9zY3JlZW5zLXN0b3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBsb3JlclRvb2xiYXJNb2R1bGUgfSBmcm9tICcuL2V4cGxvcmVyL2V4cGxvcmVyLXRvb2xiYXIvZXhwbG9yZXItdG9vbGJhci5tb2R1bGUnO1xuaW1wb3J0IHtDcmVhdGVUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L2NyZWF0ZS10ZW1wbGF0ZS9jcmVhdGUtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoVGVtcGxhdGVDb21wb25lbnR9IGZyb20gJy4vcHJldmlldy9zZWFyY2gtdGVtcGxhdGUvc2VhcmNoLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpbXVsYXRlVGVtcGxhdGVDb21wb25lbnR9IGZyb20gJy4vcHJldmlldy9zaW11bGF0ZS10ZW1wbGF0ZS9zaW11bGF0ZS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXNpZ25TcGFjZUNvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L2Rlc2lnbi1zcGFjZS9kZXNpZ24tc3BhY2UuY29tcG9uZW50JztcbmltcG9ydCB7SW1wb3J0VGVtcGxhdGVDb21wb25lbnR9IGZyb20gJy4vcHJldmlldy9pbXBvcnQtdGVtcGxhdGUvaW1wb3J0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0b3JlTWFuYWdlbWVudENvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L3N0b3JlLW1hbmFnZW1lbnQvc3RvcmUtbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UHJldmlld0NvbXBvbmVudH0gZnJvbSAnLi9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7UGFuZWxNZW51TW9kdWxlfSBmcm9tICdwcmltZW5nL3BhbmVsbWVudSc7XG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge3BhdGg6ICdjcmVhdGVUZW1wbGF0ZScgLCBjb21wb25lbnQ6IENyZWF0ZVRlbXBsYXRlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdzZWFyY2hUZW1wbGF0ZScgLCBjb21wb25lbnQ6IFNlYXJjaFRlbXBsYXRlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdzaW11bGF0ZVRlbXBsYXRlJyAsIGNvbXBvbmVudDogU2ltdWxhdGVUZW1wbGF0ZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnZGVzaWduU3BhY2UnICwgY29tcG9uZW50OiBEZXNpZ25TcGFjZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnaW1wb3J0VGVtcGxhdGUnICwgY29tcG9uZW50OiBJbXBvcnRUZW1wbGF0ZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnc3RvcmUnLCBjb21wb25lbnQ6IFN0b3JlTWFuYWdlbWVudENvbXBvbmVudH0sXG4gIHtwYXRoOiAnJyAsIGNvbXBvbmVudDogUHJldmlld0NvbXBvbmVudH1cbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBFeHBsb3Jlck1vZHVsZSwgQ29yZU1vZHVsZSxcbiAgICBQYW5lbE1lbnVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdpZGdldENvbXBvbmVudCxcbiAgICBXaWRnZXRzU3RvcmVDb21wb25lbnQsXG4gICAgU3RvcmVTZWxlY3RvckNvbXBvbmVudCxcbiAgICBTdG9yZURpc3BsYXllckNvbXBvbmVudCxcbiAgICBXaWRnZXRzVG9TY3JlZW5Td2l0Y2hlckNvbXBvbmVudCxcbiAgICBTY3JlZW5zU3RvcmVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV4cGxvcmVyTW9kdWxlLFxuICAgIEV4cGxvcmVyVG9vbGJhck1vZHVsZSxcbiAgICBXaWRnZXRzU3RvcmVDb21wb25lbnQsXG4gICAgV2lkZ2V0c1RvU2NyZWVuU3dpdGNoZXJDb21wb25lbnQsXG4gICAgUHJldmlld01vZHVsZSxcblxuICBdLFxuICBwcm92aWRlcnM6IFtXaWRnZXRzVG9TY3JlZW5Td2l0Y2hlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge31cbiJdfQ==