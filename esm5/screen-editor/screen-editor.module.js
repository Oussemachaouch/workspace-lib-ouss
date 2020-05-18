/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenEditorComponent } from './main/screen-editor/screen-editor.component';
import { MainModule } from './main/main.module';
import { SecurityClientApiImpl } from '../fake-backend/mocked-api-impl/security-client-api-impl';
import { WorkspaceClientApiImpl } from '../fake-backend/mocked-api-impl/workspace.client.api.impl';
import { IDEMessageService } from '../fake-backend/mocked-api-impl/ide-message.api';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
import { IdeActionsServiceImpl } from '../fake-backend/mocked-api-impl/ide-actions.service';
/** @type {?} */
var routes = [{ path: '', component: ScreenEditorComponent }];
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client/workspace.client.api';
import { SecurityClientApi, IdeActionsService } from '@palmyra-devkit/core-api/client';
/** @type {?} */
var modulesApiPaths = { 'screen-editor': '/api/screen-editor/1.5.0-beta.67' };
var ɵ0 = modulesApiPaths;
var ScreenEditorModule = /** @class */ (function () {
    function ScreenEditorModule() {
    }
    ScreenEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes), StoreModule.forRoot({}),
                        EffectsModule.forRoot([])],
                    exports: [MainModule],
                    providers: [{ provide: 'API_PATHS', useValue: ɵ0 },
                        { provide: WorkspaceClientApi, useClass: WorkspaceClientApiImpl },
                        { provide: SecurityClientApi, useClass: SecurityClientApiImpl },
                        { provide: IdeMessageService, useClass: IDEMessageService },
                        { provide: IdeActionsService, useClass: IdeActionsServiceImpl }]
                },] }
    ];
    return ScreenEditorModule;
}());
export { ScreenEditorModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL3NjcmVlbi1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7O0lBQ3RGLE1BQU0sR0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxpQ0FBaUMsQ0FBQzs7SUFDbkMsZUFBZSxHQUFHLEVBQUUsZUFBZSxFQUFFLGtDQUFrQyxFQUFFO1NBSzlCLGVBQWU7QUFKaEU7SUFBQTtJQVVpQyxDQUFDOztnQkFWakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQy9ELGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDckIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsSUFBaUIsRUFBRTt3QkFDOUQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO3dCQUNqRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7d0JBQy9ELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTt3QkFDM0QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7aUJBQ25FOztJQUNnQyx5QkFBQztDQUFBLEFBVmxDLElBVWtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNjcmVlbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9zY3JlZW4tZWRpdG9yL3NjcmVlbi1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuL21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2VjdXJpdHlDbGllbnRBcGlJbXBsIH0gZnJvbSAnLi4vZmFrZS1iYWNrZW5kL21vY2tlZC1hcGktaW1wbC9zZWN1cml0eS1jbGllbnQtYXBpLWltcGwnO1xuaW1wb3J0IHsgV29ya3NwYWNlQ2xpZW50QXBpSW1wbCB9IGZyb20gJy4uL2Zha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvd29ya3NwYWNlLmNsaWVudC5hcGkuaW1wbCc7XG5pbXBvcnQgeyBJREVNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL2Zha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvaWRlLW1lc3NhZ2UuYXBpJztcbmltcG9ydCB7IElkZU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL2NsaWVudC9tZXNzYWdlcyc7XG5pbXBvcnQgeyBJZGVBY3Rpb25zU2VydmljZUltcGwgfSBmcm9tICcuLi9mYWtlLWJhY2tlbmQvbW9ja2VkLWFwaS1pbXBsL2lkZS1hY3Rpb25zLnNlcnZpY2UnO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbeyBwYXRoOiAnJywgY29tcG9uZW50OiBTY3JlZW5FZGl0b3JDb21wb25lbnQgfV07XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJ1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgV29ya3NwYWNlQ2xpZW50QXBpIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL2NsaWVudC93b3Jrc3BhY2UuY2xpZW50LmFwaSc7XG5pbXBvcnQge1xuICBTZWN1cml0eUNsaWVudEFwaSxcbiAgSWRlQWN0aW9uc1NlcnZpY2Vcbn0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL2NsaWVudCc7XG5jb25zdCBtb2R1bGVzQXBpUGF0aHMgPSB7ICdzY3JlZW4tZWRpdG9yJzogJy9hcGkvc2NyZWVuLWVkaXRvci8xLjUuMC1iZXRhLjY3JyB9O1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLCAgU3RvcmVNb2R1bGUuZm9yUm9vdCh7fSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JSb290KFtdKV0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogJ0FQSV9QQVRIUycsIHVzZVZhbHVlOiBtb2R1bGVzQXBpUGF0aHMgfSxcbiAgICB7IHByb3ZpZGU6IFdvcmtzcGFjZUNsaWVudEFwaSwgdXNlQ2xhc3M6IFdvcmtzcGFjZUNsaWVudEFwaUltcGwgfSxcbiAgICB7IHByb3ZpZGU6IFNlY3VyaXR5Q2xpZW50QXBpLCB1c2VDbGFzczogU2VjdXJpdHlDbGllbnRBcGlJbXBsIH0sXG4gICAgeyBwcm92aWRlOiBJZGVNZXNzYWdlU2VydmljZSwgdXNlQ2xhc3M6IElERU1lc3NhZ2VTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBJZGVBY3Rpb25zU2VydmljZSwgdXNlQ2xhc3M6IElkZUFjdGlvbnNTZXJ2aWNlSW1wbCB9XVxufSlcbmV4cG9ydCBjbGFzcyBTY3JlZW5FZGl0b3JNb2R1bGUge31cbiJdfQ==