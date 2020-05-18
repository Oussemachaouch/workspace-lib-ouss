/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../../shared/shared.module';
import { FeatureExplorerComponent } from './feature-explorer/feature-explorer.component';
import { ExplorerToolbarModule } from './explorer-toolbar/explorer-toolbar.module';
import { ExplorerComponent } from './explorer.component';
import { Navigator } from './navigator/navigator';
import { CoreModule } from '../../core';
import { FeatureSelectorComponent } from './feature-explorer/dialog/feature-selector/feature-selector.component';
import { FeatureUpdatorComponent } from './feature-explorer/dialog/feature-updator/feature-updator.component';
import { ScreenClonerComponent } from './feature-explorer/dialog/screen-cloner/screen-cloner.component';
export class ExplorerModule {
}
ExplorerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule,
                    // UsecasePolicyModule,
                    ExplorerToolbarModule,
                    CoreModule,
                    // StoreModule.forFeature(featuresManagement.key, featuresManagement.reducer),
                    /*StoreModule.forFeature(
                
                      screenExplorerManagement.reducerKey,
                      screenExplorerManagement.reducer
                    ),*/
                    // EffectsModule.forFeature([FeaturesEffects, ScreenExplorerEffects])
                    EffectsModule.forFeature([])
                ],
                declarations: [
                    //  ScreenExplorerComponent,
                    FeatureExplorerComponent,
                    // SectionExplorerComponent,
                    FeatureSelectorComponent,
                    FeatureUpdatorComponent,
                    ScreenClonerComponent,
                    ExplorerComponent
                ],
                exports: [ExplorerComponent],
                providers: [Navigator],
                entryComponents: [
                    FeatureSelectorComponent,
                    FeatureUpdatorComponent,
                    ScreenClonerComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL2V4cGxvcmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUV6RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM5RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQW1DeEcsTUFBTSxPQUFPLGNBQWM7OztZQWpDMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixVQUFVO29CQUNWLDhFQUE4RTtvQkFDOUU7Ozs7d0JBSUk7b0JBQ0oscUVBQXFFO29CQUNyRSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztpQkFFN0I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNkLDRCQUE0QjtvQkFDMUIsd0JBQXdCO29CQUN6Qiw0QkFBNEI7b0JBQzNCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsZUFBZSxFQUFFO29CQUNmLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZUV4cGxvcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLWV4cGxvcmVyL2ZlYXR1cmUtZXhwbG9yZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRXhwbG9yZXJUb29sYmFyTW9kdWxlIH0gZnJvbSAnLi9leHBsb3Jlci10b29sYmFyL2V4cGxvcmVyLXRvb2xiYXIubW9kdWxlJztcbmltcG9ydCB7IEV4cGxvcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBsb3Jlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3IvbmF2aWdhdG9yJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW1wb3J0IHsgRmVhdHVyZVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLXNlbGVjdG9yL2ZlYXR1cmUtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmVVcGRhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLXVwZGF0b3IvZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JlZW5DbG9uZXJDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmUtZXhwbG9yZXIvZGlhbG9nL3NjcmVlbi1jbG9uZXIvc2NyZWVuLWNsb25lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIC8vIFVzZWNhc2VQb2xpY3lNb2R1bGUsXG4gICAgRXhwbG9yZXJUb29sYmFyTW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgLy8gU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShmZWF0dXJlc01hbmFnZW1lbnQua2V5LCBmZWF0dXJlc01hbmFnZW1lbnQucmVkdWNlciksXG4gICAgLypTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFxuXG4gICAgICBzY3JlZW5FeHBsb3Jlck1hbmFnZW1lbnQucmVkdWNlcktleSxcbiAgICAgIHNjcmVlbkV4cGxvcmVyTWFuYWdlbWVudC5yZWR1Y2VyXG4gICAgKSwqL1xuICAgIC8vIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRmVhdHVyZXNFZmZlY3RzLCBTY3JlZW5FeHBsb3JlckVmZmVjdHNdKVxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXSlcblxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgLy8gIFNjcmVlbkV4cGxvcmVyQ29tcG9uZW50LFxuICAgIEZlYXR1cmVFeHBsb3JlckNvbXBvbmVudCxcbiAgIC8vIFNlY3Rpb25FeHBsb3JlckNvbXBvbmVudCxcbiAgICBGZWF0dXJlU2VsZWN0b3JDb21wb25lbnQsXG4gICAgRmVhdHVyZVVwZGF0b3JDb21wb25lbnQsXG4gICAgU2NyZWVuQ2xvbmVyQ29tcG9uZW50LFxuICAgIEV4cGxvcmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtFeHBsb3JlckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW05hdmlnYXRvcl0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEZlYXR1cmVTZWxlY3RvckNvbXBvbmVudCxcbiAgICBGZWF0dXJlVXBkYXRvckNvbXBvbmVudCxcbiAgICBTY3JlZW5DbG9uZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBsb3Jlck1vZHVsZSB7fVxuIl19