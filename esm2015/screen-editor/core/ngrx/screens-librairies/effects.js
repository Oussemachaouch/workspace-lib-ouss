/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_SCREENS_LIBRAIRIES, LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY, LOAD_SCREENS_LIBRAIRIES_FAILED } from './actions';
import { ScreensLibrairiesAPIService } from '../../services/api';
import { Injectable } from '@angular/core';
export class ScreensLibrairiesEffects {
    /**
     * @param {?} actions$
     * @param {?} screensLibrariesApi
     */
    constructor(actions$, screensLibrariesApi) {
        this.actions$ = actions$;
        this.screensLibrariesApi = screensLibrariesApi;
        this.loadWidgetsLibraries$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_SCREENS_LIBRAIRIES), concatMap((/**
         * @return {?}
         */
        () => this.screensLibrariesApi.getAllScreensLibrairies().pipe(map((/**
         * @param {?} screensLibrairies
         * @return {?}
         */
        screensLibrairies => LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY({ screensLibrairies })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(LOAD_SCREENS_LIBRAIRIES_FAILED({ err })))))))))));
    }
}
ScreensLibrairiesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScreensLibrairiesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ScreensLibrairiesAPIService }
];
if (false) {
    /** @type {?} */
    ScreensLibrairiesEffects.prototype.loadWidgetsLibraries$;
    /**
     * @type {?}
     * @private
     */
    ScreensLibrairiesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ScreensLibrairiesEffects.prototype.screensLibrariesApi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L3NjcmVlbnMtbGlicmFpcmllcy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLG9DQUFvQyxFQUNwQyw4QkFBOEIsRUFDL0IsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUNuQyxZQUNVLFFBQWlCLEVBQ2pCLG1CQUFnRDtRQURoRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNkI7UUFHMUQsMEJBQXFCLEdBQUcsWUFBWTs7O1FBQUMsR0FBRyxFQUFFLENBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFDL0IsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixFQUFFLENBQUMsSUFBSSxDQUNyRCxHQUFHOzs7O1FBQ0QsaUJBQWlCLENBQUMsRUFBRSxDQUNsQixvQ0FBb0MsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsR0FDN0QsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQy9ELENBQ0YsRUFDRixDQUNGLEVBQ0YsQ0FBQztJQWZDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFaRixPQUFPO1lBU1AsMkJBQTJCOzs7O0lBVWxDLHlEQWFFOzs7OztJQWpCQSw0Q0FBeUI7Ozs7O0lBQ3pCLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAsIGNvbmNhdE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIExPQURfU0NSRUVOU19MSUJSQUlSSUVTLFxuICBMT0FEX1NDUkVFTlNfTElCUkFJUklFU19TVUNDRVNTRlVMTFksXG4gIExPQURfU0NSRUVOU19MSUJSQUlSSUVTX0ZBSUxFRFxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2NyZWVuc0xpYnJhaXJpZXNBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcmVlbnNMaWJyYWlyaWVzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzY3JlZW5zTGlicmFyaWVzQXBpOiBTY3JlZW5zTGlicmFpcmllc0FQSVNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRXaWRnZXRzTGlicmFyaWVzJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShMT0FEX1NDUkVFTlNfTElCUkFJUklFUyksXG4gICAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgICAgdGhpcy5zY3JlZW5zTGlicmFyaWVzQXBpLmdldEFsbFNjcmVlbnNMaWJyYWlyaWVzKCkucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBzY3JlZW5zTGlicmFpcmllcyA9PlxuICAgICAgICAgICAgICBMT0FEX1NDUkVFTlNfTElCUkFJUklFU19TVUNDRVNTRlVMTFkoeyBzY3JlZW5zTGlicmFpcmllcyB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IG9mKExPQURfU0NSRUVOU19MSUJSQUlSSUVTX0ZBSUxFRCh7IGVyciB9KSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuIl19