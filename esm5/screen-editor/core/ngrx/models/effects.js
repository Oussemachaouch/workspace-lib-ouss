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
var ModelsEffects = /** @class */ (function () {
    function ModelsEffects(actions$, modelsApi) {
        var _this = this;
        this.actions$ = actions$;
        this.modelsApi = modelsApi;
        this.loadModels$ = createEffect((/**
         * @return {?}
         */
        function () {
            return _this.actions$.pipe(ofType(LOAD_MODELS), concatMap((/**
             * @return {?}
             */
            function () {
                return _this.modelsApi.getModels().pipe(map((/**
                 * @param {?} entities
                 * @return {?}
                 */
                function (entities) { return LOAD_MODELS_SUCCESSFULLY({ entities: entities }); })), catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return of(LOAD_MODELS_FAILED({ err: err })); })));
            })));
        }));
    }
    ModelsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ModelsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WorkspaceClientApi }
    ]; };
    return ModelsEffects;
}());
export { ModelsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L21vZGVscy9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUNMLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ25CLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUVFLHVCQUNVLFFBQWlCLEVBQ2pCLFNBQTZCO1FBRnZDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUd2QyxnQkFBVyxHQUFHLFlBQVk7OztRQUFDO1lBQ3pCLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDbkIsU0FBUzs7O1lBQUM7Z0JBQ1IsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDcEMsR0FBRzs7OztnQkFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLHdCQUF3QixDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxFQUF0QyxDQUFzQyxFQUFDLEVBQ3ZELFVBQVU7Ozs7Z0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUNuRCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0g7UUFSRCxDQVFDLEVBQ0YsQ0FBQztJQVpDLENBQUM7O2dCQUxMLFVBQVU7Ozs7Z0JBWkYsT0FBTztnQkFFUCxrQkFBa0I7O0lBNEIzQixvQkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGFBQWE7OztJQU14QixvQ0FVRTs7Ozs7SUFkQSxpQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFdvcmtzcGFjZUNsaWVudEFwaSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9jbGllbnQnO1xuXG5pbXBvcnQge1xuICBMT0FEX01PREVMUyxcbiAgTE9BRF9NT0RFTFNfU1VDQ0VTU0ZVTExZLFxuICBMT0FEX01PREVMU19GQUlMRURcbn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RlbHNFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG1vZGVsc0FwaTogV29ya3NwYWNlQ2xpZW50QXBpXG4gICkge31cblxuICBsb2FkTW9kZWxzJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShMT0FEX01PREVMUyksXG4gICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbHNBcGkuZ2V0TW9kZWxzKCkucGlwZShcbiAgICAgICAgICBtYXAoZW50aXRpZXMgPT4gTE9BRF9NT0RFTFNfU1VDQ0VTU0ZVTExZKHsgZW50aXRpZXMgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IG9mKExPQURfTU9ERUxTX0ZBSUxFRCh7IGVyciB9KSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIClcbiAgKTtcbn1cbiJdfQ==