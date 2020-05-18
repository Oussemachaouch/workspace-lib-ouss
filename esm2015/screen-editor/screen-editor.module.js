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
const routes = [{ path: '', component: ScreenEditorComponent }];
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client/workspace.client.api';
import { SecurityClientApi, IdeActionsService } from '@palmyra-devkit/core-api/client';
/** @type {?} */
const modulesApiPaths = { 'screen-editor': '/api/screen-editor/1.5.0-beta.67' };
const ɵ0 = modulesApiPaths;
export class ScreenEditorModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL3NjcmVlbi1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7O01BQ3RGLE1BQU0sR0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxpQ0FBaUMsQ0FBQzs7TUFDbkMsZUFBZSxHQUFHLEVBQUUsZUFBZSxFQUFFLGtDQUFrQyxFQUFFO1dBSzlCLGVBQWU7QUFNaEUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBVjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUMvRCxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLElBQWlCLEVBQUU7b0JBQzlELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtvQkFDakUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO29CQUMvRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7b0JBQzNELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2FBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2NyZWVuRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NjcmVlbi1lZGl0b3Ivc2NyZWVuLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vbWFpbi9tYWluLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWN1cml0eUNsaWVudEFwaUltcGwgfSBmcm9tICcuLi9mYWtlLWJhY2tlbmQvbW9ja2VkLWFwaS1pbXBsL3NlY3VyaXR5LWNsaWVudC1hcGktaW1wbCc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VDbGllbnRBcGlJbXBsIH0gZnJvbSAnLi4vZmFrZS1iYWNrZW5kL21vY2tlZC1hcGktaW1wbC93b3Jrc3BhY2UuY2xpZW50LmFwaS5pbXBsJztcbmltcG9ydCB7IElERU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFrZS1iYWNrZW5kL21vY2tlZC1hcGktaW1wbC9pZGUtbWVzc2FnZS5hcGknO1xuaW1wb3J0IHsgSWRlTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50L21lc3NhZ2VzJztcbmltcG9ydCB7IElkZUFjdGlvbnNTZXJ2aWNlSW1wbCB9IGZyb20gJy4uL2Zha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvaWRlLWFjdGlvbnMuc2VydmljZSc7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNjcmVlbkVkaXRvckNvbXBvbmVudCB9XTtcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VDbGllbnRBcGkgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50L3dvcmtzcGFjZS5jbGllbnQuYXBpJztcbmltcG9ydCB7XG4gIFNlY3VyaXR5Q2xpZW50QXBpLFxuICBJZGVBY3Rpb25zU2VydmljZVxufSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50JztcbmNvbnN0IG1vZHVsZXNBcGlQYXRocyA9IHsgJ3NjcmVlbi1lZGl0b3InOiAnL2FwaS9zY3JlZW4tZWRpdG9yLzEuNS4wLWJldGEuNjcnIH07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksICBTdG9yZU1vZHVsZS5mb3JSb290KHt9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW10pXSxcbiAgZXhwb3J0czogW01haW5Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiAnQVBJX1BBVEhTJywgdXNlVmFsdWU6IG1vZHVsZXNBcGlQYXRocyB9LFxuICAgIHsgcHJvdmlkZTogV29ya3NwYWNlQ2xpZW50QXBpLCB1c2VDbGFzczogV29ya3NwYWNlQ2xpZW50QXBpSW1wbCB9LFxuICAgIHsgcHJvdmlkZTogU2VjdXJpdHlDbGllbnRBcGksIHVzZUNsYXNzOiBTZWN1cml0eUNsaWVudEFwaUltcGwgfSxcbiAgICB7IHByb3ZpZGU6IElkZU1lc3NhZ2VTZXJ2aWNlLCB1c2VDbGFzczogSURFTWVzc2FnZVNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IElkZUFjdGlvbnNTZXJ2aWNlLCB1c2VDbGFzczogSWRlQWN0aW9uc1NlcnZpY2VJbXBsIH1dXG59KVxuZXhwb3J0IGNsYXNzIFNjcmVlbkVkaXRvck1vZHVsZSB7fVxuIl19