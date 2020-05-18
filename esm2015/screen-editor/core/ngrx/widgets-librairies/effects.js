/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_WIDEGTS_LIBRAIRIES, LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY, LOAD_WIDEGTS_LIBRAIRIES_FAILED } from './actions';
import { WidgetsLibrairiesAPIService } from '../../services/api';
import { Injectable } from '@angular/core';
export class WidgetsLibrairiesEffects {
    /**
     * @param {?} actions$
     * @param {?} widgetsLibrariesApi
     */
    constructor(actions$, widgetsLibrariesApi) {
        this.actions$ = actions$;
        this.widgetsLibrariesApi = widgetsLibrariesApi;
        this.loadWidgetsLibraries$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_WIDEGTS_LIBRAIRIES), concatMap((/**
         * @return {?}
         */
        () => this.widgetsLibrariesApi.getAllWidgetsLibraries().pipe(map((/**
         * @param {?} widgetsLibrairies
         * @return {?}
         */
        widgetsLibrairies => LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY({ widgetsLibrairies })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(LOAD_WIDEGTS_LIBRAIRIES_FAILED({ err })))))))))));
    }
}
WidgetsLibrairiesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetsLibrairiesEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetsLibrairiesAPIService }
];
if (false) {
    /** @type {?} */
    WidgetsLibrairiesEffects.prototype.loadWidgetsLibraries$;
    /**
     * @type {?}
     * @private
     */
    WidgetsLibrairiesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    WidgetsLibrairiesEffects.prototype.widgetsLibrariesApi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3dpZGdldHMtbGlicmFpcmllcy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG9DQUFvQyxFQUNwQyw4QkFBOEIsRUFDL0IsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUNuQyxZQUNVLFFBQWlCLEVBQ2pCLG1CQUFnRDtRQURoRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNkI7UUFHMUQsMEJBQXFCLEdBQUcsWUFBWTs7O1FBQUMsR0FBRyxFQUFFLENBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFDL0IsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1FBQ0QsaUJBQWlCLENBQUMsRUFBRSxDQUNsQixvQ0FBb0MsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FDN0QsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQy9ELENBQ0YsRUFDRixDQUNGLEVBQ0YsQ0FBQztJQWZDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFaRixPQUFPO1lBU1AsMkJBQTJCOzs7O0lBVWxDLHlEQWFFOzs7OztJQWpCQSw0Q0FBeUI7Ozs7O0lBQ3pCLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAsIGNvbmNhdE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIExPQURfV0lERUdUU19MSUJSQUlSSUVTLFxuICBMT0FEX1dJREVHVFNfTElCUkFJUklFU19TVUNDRVNTRlVMTFksXG4gIExPQURfV0lERUdUU19MSUJSQUlSSUVTX0ZBSUxFRFxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgV2lkZ2V0c0xpYnJhaXJpZXNBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldHNMaWJyYWlyaWVzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB3aWRnZXRzTGlicmFyaWVzQXBpOiBXaWRnZXRzTGlicmFpcmllc0FQSVNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRXaWRnZXRzTGlicmFyaWVzJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShMT0FEX1dJREVHVFNfTElCUkFJUklFUyksXG4gICAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgICAgdGhpcy53aWRnZXRzTGlicmFyaWVzQXBpLmdldEFsbFdpZGdldHNMaWJyYXJpZXMoKS5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIHdpZGdldHNMaWJyYWlyaWVzID0+XG4gICAgICAgICAgICAgIExPQURfV0lERUdUU19MSUJSQUlSSUVTX1NVQ0NFU1NGVUxMWSh7IHdpZGdldHNMaWJyYWlyaWVzIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gb2YoTE9BRF9XSURFR1RTX0xJQlJBSVJJRVNfRkFJTEVEKHsgZXJyIH0pKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=