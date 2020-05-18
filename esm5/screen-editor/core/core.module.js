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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
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
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQixjQUFjLEVBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG1CQUFtQixFQUNuQixXQUFXLEVBQ1osTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RCxPQUFPLEtBQUssMkJBQTJCLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxLQUFLLDJCQUEyQixNQUFNLGlDQUFpQyxDQUFDO0FBQy9FLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUM7SUFBQTtJQTRDeUIsQ0FBQzs7Z0JBNUN6QixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO29CQUM1QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixXQUFXLENBQUMsVUFBVSxDQUNwQiwyQkFBMkIsQ0FBQyxHQUFHLEVBQy9CLDJCQUEyQixDQUFDLE9BQU8sQ0FDcEM7d0JBQ0QsV0FBVyxDQUFDLFVBQVUsQ0FDcEIsMkJBQTJCLENBQUMsR0FBRyxFQUMvQiwyQkFBMkIsQ0FBQyxPQUFPLENBQ3BDO3dCQUNELFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzt3QkFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQzs0QkFDdkIsd0JBQXdCOzRCQUN4Qiw0QkFBNEI7NEJBQzVCLGFBQWE7eUJBQ2QsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsUUFBUTt3QkFDUixhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7d0JBQ25CLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixVQUFVO3dCQUNWLG9CQUFvQjt3QkFDcEIsV0FBVztxQkFDWjtpQkFDRjs7SUFDd0IsaUJBQUM7Q0FBQSxBQTVDMUIsSUE0QzBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHsgVmFsaWRhdGlvblN0b3JlLCBQcmV2aWV3U3RvcmUsIFN3YWdnZXJTZXJ2aWNlc1N0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQge1xuICBXaWRnZXRzTGlicmFpcmllc0FQSVNlcnZpY2UsXG4gIFNjcmVlbnNMaWJyYWlyaWVzQVBJU2VydmljZSxcbiAgUHJldmlld1NlcnZpY2Vcbn0gZnJvbSAnLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHtcbiAgU2NyZWVuVmFsaWRhdGlvblNlcnZpY2UsXG4gIFVubG9hZE1vZHVsZVNlcnZpY2UsXG4gIFV1aWRTZXJ2aWNlXG59IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBFeHBsb3JlckhlYWRlclBpcGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXhwbG9yZXItaGVhZGVyLnBpcGUnO1xuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2FmZS5waXBlJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRG5kU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZG5kL2RuZC5zZXJ2aWNlJztcblxuaW1wb3J0ICogYXMgd2lkZ2V0c0xpYnJhaXJpZXNNYW5hZ2VtZW50IGZyb20gJy4uL2NvcmUvbmdyeC93aWRnZXRzLWxpYnJhaXJpZXMnO1xuaW1wb3J0ICogYXMgc2NyZWVuc0xpYnJhaXJpZXNNYW5hZ2VtZW50IGZyb20gJy4uL2NvcmUvbmdyeC9zY3JlZW5zLWxpYnJhaXJpZXMnO1xuaW1wb3J0ICogYXMgbW9kZWxzTWFuYWdlbWVudCBmcm9tICcuL25ncngvbW9kZWxzJztcbmltcG9ydCB7IFdpZGdldHNMaWJyYWlyaWVzRWZmZWN0cyB9IGZyb20gJy4uL2NvcmUvbmdyeC93aWRnZXRzLWxpYnJhaXJpZXMnO1xuLy8gaW1wb3J0IHsgU2NyZWVuc0xpYnJhaXJpZXNFZmZlY3RzIH0gZnJvbSAnLi4vY29yZS9uZ3J4L3NjcmVlbnMtbGlicmFpcmllcyc7XG5pbXBvcnQgeyBNb2RlbHNFZmZlY3RzIH0gZnJvbSAnLi9uZ3J4L21vZGVscyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0V4cGxvcmVySGVhZGVyUGlwZSwgU2FmZVBpcGVdLFxuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIExheW91dE1vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGUsXG4gICAgTG9hZGluZ01vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuICAgICAgd2lkZ2V0c0xpYnJhaXJpZXNNYW5hZ2VtZW50LmtleSxcbiAgICAgIHdpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudC5yZWR1Y2VyXG4gICAgKSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuICAgICAgc2NyZWVuc0xpYnJhaXJpZXNNYW5hZ2VtZW50LmtleSxcbiAgICAgIHNjcmVlbnNMaWJyYWlyaWVzTWFuYWdlbWVudC5yZWR1Y2VyXG4gICAgKSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKG1vZGVsc01hbmFnZW1lbnQua2V5LCBtb2RlbHNNYW5hZ2VtZW50LnJlZHVjZXIpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICBXaWRnZXRzTGlicmFpcmllc0VmZmVjdHMsXG4gICAgICAvLyBTY3JlZW5zTGlicmFpcmllc0VmZmVjdHMsXG4gICAgICBNb2RlbHNFZmZlY3RzXG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExheW91dE1vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGUsXG4gICAgRXhwbG9yZXJIZWFkZXJQaXBlLFxuICAgIFNhZmVQaXBlLFxuICAgIExvYWRpbmdNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uZmlybWF0aW9uU2VydmljZSxcbiAgICBXaWRnZXRzTGlicmFpcmllc0FQSVNlcnZpY2UsXG4gICAgU2NyZWVuc0xpYnJhaXJpZXNBUElTZXJ2aWNlLFxuICAgIFByZXZpZXdTZXJ2aWNlLFxuICAgIFNjcmVlblZhbGlkYXRpb25TZXJ2aWNlLFxuICAgIFZhbGlkYXRpb25TdG9yZSxcbiAgICBQcmV2aWV3U3RvcmUsXG4gICAgVW5sb2FkTW9kdWxlU2VydmljZSxcbiAgICBMYXlvdXRTZXJ2aWNlLFxuICAgIERuZFNlcnZpY2UsXG4gICAgU3dhZ2dlclNlcnZpY2VzU3RvcmUsXG4gICAgVXVpZFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHt9XG4iXX0=