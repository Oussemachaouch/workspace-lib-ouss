/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
import { LOAD_MODELS, LOAD_MODELS_SUCCESSFULLY, LOAD_MODELS_FAILED } from './actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
export class ModelsEffects {
    /**
     * @param {?} actions$
     * @param {?} modelsApi
     */
    constructor(actions$, modelsApi) {
        this.actions$ = actions$;
        this.modelsApi = modelsApi;
        this.loadModels$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(LOAD_MODELS), concatMap((/**
         * @return {?}
         */
        () => {
            return this.modelsApi.getModels().pipe(map((/**
             * @param {?} entities
             * @return {?}
             */
            entities => LOAD_MODELS_SUCCESSFULLY({ entities }))), catchError((/**
             * @param {?} err
             * @return {?}
             */
            err => of(LOAD_MODELS_FAILED({ err })))));
        })))));
    }
}
ModelsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ModelsEffects.ctorParameters = () => [
    { type: Actions },
    { type: WorkspaceClientApi }
];
if (false) {
    /** @type {?} */
    ModelsEffects.prototype.loadModels$;
    /**
     * @type {?}
     * @private
     */
    ModelsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ModelsEffects.prototype.modelsApi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L21vZGVscy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUNMLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ25CLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsWUFDVSxRQUFpQixFQUNqQixTQUE2QjtRQUQ3QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBR3ZDLGdCQUFXLEdBQUcsWUFBWTs7O1FBQUMsR0FBRyxFQUFFLENBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQ25CLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLEdBQUc7Ozs7WUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUN2RCxVQUFVOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FDbkQsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILEVBQ0YsQ0FBQztJQVpDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFaRixPQUFPO1lBRVAsa0JBQWtCOzs7O0lBaUJ6QixvQ0FVRTs7Ozs7SUFkQSxpQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFdvcmtzcGFjZUNsaWVudEFwaSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9jbGllbnQnO1xuXG5pbXBvcnQge1xuICBMT0FEX01PREVMUyxcbiAgTE9BRF9NT0RFTFNfU1VDQ0VTU0ZVTExZLFxuICBMT0FEX01PREVMU19GQUlMRURcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RlbHNFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG1vZGVsc0FwaTogV29ya3NwYWNlQ2xpZW50QXBpXG4gICkge31cblxuICBsb2FkTW9kZWxzJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShMT0FEX01PREVMUyksXG4gICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbHNBcGkuZ2V0TW9kZWxzKCkucGlwZShcbiAgICAgICAgICBtYXAoZW50aXRpZXMgPT4gTE9BRF9NT0RFTFNfU1VDQ0VTU0ZVTExZKHsgZW50aXRpZXMgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IG9mKExPQURfTU9ERUxTX0ZBSUxFRCh7IGVyciB9KSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIClcbiAgKTtcbn1cbiJdfQ==