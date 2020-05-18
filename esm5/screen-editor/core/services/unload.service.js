/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ValidationStore } from '../../core/store';
var UnloadModuleService = /** @class */ (function () {
    function UnloadModuleService(validationStore) {
        this.validationStore = validationStore;
    }
    /**
     * @return {?}
     */
    UnloadModuleService.prototype.unloadModules = /**
     * @return {?}
     */
    function () {
        this.validationStore.complete();
    };
    UnloadModuleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnloadModuleService.ctorParameters = function () { return [
        { type: ValidationStore }
    ]; };
    return UnloadModuleService;
}());
export { UnloadModuleService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnloadModuleService.prototype.validationStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvcmUvc2VydmljZXMvdW5sb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5EO0lBRUUsNkJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFFeEQsMkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFORixVQUFVOzs7O2dCQUZGLGVBQWU7O0lBU3hCLDBCQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksbUJBQW1COzs7Ozs7SUFDbEIsOENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdGlvblN0b3JlIH0gZnJvbSAnLi4vLi4vY29yZS9zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmxvYWRNb2R1bGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU3RvcmU6IFZhbGlkYXRpb25TdG9yZSkge31cblxuICB1bmxvYWRNb2R1bGVzKCkge1xuICAgIHRoaXMudmFsaWRhdGlvblN0b3JlLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==