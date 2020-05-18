/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfirmationService } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layout';
import { ValidationStore, PreviewStore, SwaggerServicesStore } from './store';
import { WidgetsLibrairiesAPIService, ScreensLibrairiesAPIService, PreviewService } from './services/api';
import { ScreenValidationService, UnloadModuleService, UuidService } from './services';
import { DialogModule } from './dialog/dialog.module';
import { ExplorerHeaderPipe } from './directives/explorer-header.pipe';
import { SafePipe } from './directives/safe.pipe';
import { LayoutService } from './services/layout.service';
import { LoadingModule } from './loading/loading.module';
import { DndService } from '../core/services/dnd/dnd.service';
import * as widgetsLibrairiesManagement from '../core/ngrx/widgets-librairies';
import * as screensLibrairiesManagement from '../core/ngrx/screens-librairies';
import * as modelsManagement from './ngrx/models';
import { WidgetsLibrairiesEffects } from '../core/ngrx/widgets-librairies';
// import { ScreensLibrairiesEffects } from '../core/ngrx/screens-librairies';
import { ModelsEffects } from './ngrx/models';
export class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ExplorerHeaderPipe, SafePipe],
                imports: [
                    SharedModule,
                    LayoutModule,
                    DialogModule,
                    LoadingModule,
                    StoreModule.forFeature(widgetsLibrairiesManagement.key, widgetsLibrairiesManagement.reducer),
                    StoreModule.forFeature(screensLibrairiesManagement.key, screensLibrairiesManagement.reducer),
                    StoreModule.forFeature(modelsManagement.key, modelsManagement.reducer),
                    EffectsModule.forFeature([
                        WidgetsLibrairiesEffects,
                        // ScreensLibrairiesEffects,
                        ModelsEffects
                    ])
                ],
                exports: [
                    LayoutModule,
                    DialogModule,
                    ExplorerHeaderPipe,
                    SafePipe,
                    LoadingModule
                ],
                providers: [
                    ConfirmationService,
                    WidgetsLibrairiesAPIService,
                    ScreensLibrairiesAPIService,
                    PreviewService,
                    ScreenValidationService,
                    ValidationStore,
                    PreviewStore,
                    UnloadModuleService,
                    LayoutService,
                    DndService,
                    SwaggerServicesStore,
                    UuidService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQixjQUFjLEVBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG1CQUFtQixFQUNuQixXQUFXLEVBQ1osTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RCxPQUFPLEtBQUssMkJBQTJCLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxLQUFLLDJCQUEyQixNQUFNLGlDQUFpQyxDQUFDO0FBQy9FLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE4QzlDLE1BQU0sT0FBTyxVQUFVOzs7WUE1Q3RCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLFdBQVcsQ0FBQyxVQUFVLENBQ3BCLDJCQUEyQixDQUFDLEdBQUcsRUFDL0IsMkJBQTJCLENBQUMsT0FBTyxDQUNwQztvQkFDRCxXQUFXLENBQUMsVUFBVSxDQUNwQiwyQkFBMkIsQ0FBQyxHQUFHLEVBQy9CLDJCQUEyQixDQUFDLE9BQU8sQ0FDcEM7b0JBQ0QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIsYUFBYTtxQkFDZCxDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixRQUFRO29CQUNSLGFBQWE7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixlQUFlO29CQUNmLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLFVBQVU7b0JBQ1Ysb0JBQW9CO29CQUNwQixXQUFXO2lCQUNaO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCB7IFZhbGlkYXRpb25TdG9yZSwgUHJldmlld1N0b3JlLCBTd2FnZ2VyU2VydmljZXNTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHtcbiAgV2lkZ2V0c0xpYnJhaXJpZXNBUElTZXJ2aWNlLFxuICBTY3JlZW5zTGlicmFpcmllc0FQSVNlcnZpY2UsXG4gIFByZXZpZXdTZXJ2aWNlXG59IGZyb20gJy4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7XG4gIFNjcmVlblZhbGlkYXRpb25TZXJ2aWNlLFxuICBVbmxvYWRNb2R1bGVTZXJ2aWNlLFxuICBVdWlkU2VydmljZVxufSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgRXhwbG9yZXJIZWFkZXJQaXBlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V4cGxvcmVyLWhlYWRlci5waXBlJztcbmltcG9ydCB7IFNhZmVQaXBlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NhZmUucGlwZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IERuZFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2RuZC9kbmQuc2VydmljZSc7XG5cbmltcG9ydCAqIGFzIHdpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudCBmcm9tICcuLi9jb3JlL25ncngvd2lkZ2V0cy1saWJyYWlyaWVzJztcbmltcG9ydCAqIGFzIHNjcmVlbnNMaWJyYWlyaWVzTWFuYWdlbWVudCBmcm9tICcuLi9jb3JlL25ncngvc2NyZWVucy1saWJyYWlyaWVzJztcbmltcG9ydCAqIGFzIG1vZGVsc01hbmFnZW1lbnQgZnJvbSAnLi9uZ3J4L21vZGVscyc7XG5pbXBvcnQgeyBXaWRnZXRzTGlicmFpcmllc0VmZmVjdHMgfSBmcm9tICcuLi9jb3JlL25ncngvd2lkZ2V0cy1saWJyYWlyaWVzJztcbi8vIGltcG9ydCB7IFNjcmVlbnNMaWJyYWlyaWVzRWZmZWN0cyB9IGZyb20gJy4uL2NvcmUvbmdyeC9zY3JlZW5zLWxpYnJhaXJpZXMnO1xuaW1wb3J0IHsgTW9kZWxzRWZmZWN0cyB9IGZyb20gJy4vbmdyeC9tb2RlbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFeHBsb3JlckhlYWRlclBpcGUsIFNhZmVQaXBlXSxcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlLFxuICAgIExvYWRpbmdNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcbiAgICAgIHdpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudC5rZXksXG4gICAgICB3aWRnZXRzTGlicmFpcmllc01hbmFnZW1lbnQucmVkdWNlclxuICAgICksXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcbiAgICAgIHNjcmVlbnNMaWJyYWlyaWVzTWFuYWdlbWVudC5rZXksXG4gICAgICBzY3JlZW5zTGlicmFpcmllc01hbmFnZW1lbnQucmVkdWNlclxuICAgICksXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShtb2RlbHNNYW5hZ2VtZW50LmtleSwgbW9kZWxzTWFuYWdlbWVudC5yZWR1Y2VyKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgV2lkZ2V0c0xpYnJhaXJpZXNFZmZlY3RzLFxuICAgICAgLy8gU2NyZWVuc0xpYnJhaXJpZXNFZmZlY3RzLFxuICAgICAgTW9kZWxzRWZmZWN0c1xuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgRGlhbG9nTW9kdWxlLFxuICAgIEV4cGxvcmVySGVhZGVyUGlwZSxcbiAgICBTYWZlUGlwZSxcbiAgICBMb2FkaW5nTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbmZpcm1hdGlvblNlcnZpY2UsXG4gICAgV2lkZ2V0c0xpYnJhaXJpZXNBUElTZXJ2aWNlLFxuICAgIFNjcmVlbnNMaWJyYWlyaWVzQVBJU2VydmljZSxcbiAgICBQcmV2aWV3U2VydmljZSxcbiAgICBTY3JlZW5WYWxpZGF0aW9uU2VydmljZSxcbiAgICBWYWxpZGF0aW9uU3RvcmUsXG4gICAgUHJldmlld1N0b3JlLFxuICAgIFVubG9hZE1vZHVsZVNlcnZpY2UsXG4gICAgTGF5b3V0U2VydmljZSxcbiAgICBEbmRTZXJ2aWNlLFxuICAgIFN3YWdnZXJTZXJ2aWNlc1N0b3JlLFxuICAgIFV1aWRTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7fVxuIl19