/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IdeActionsService } from '@palmyra-devkit/core-api/client';
import { Injectable } from '@angular/core';
var IdeActionsServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(IdeActionsServiceImpl, _super);
    function IdeActionsServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    IdeActionsServiceImpl.prototype.doSave = /**
     * @return {?}
     */
    function () {
        this.save$.next();
    };
    /**
     * @return {?}
     */
    IdeActionsServiceImpl.prototype.save = /**
     * @return {?}
     */
    function () {
        return this.save$.asObservable();
    };
    IdeActionsServiceImpl.decorators = [
        { type: Injectable }
    ];
    return IdeActionsServiceImpl;
}(IdeActionsService));
export { IdeActionsServiceImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLWFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbImZha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvaWRlLWFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFDMkMsaURBQWlCO0lBRDVEOztJQVFBLENBQUM7Ozs7SUFOQyxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxvQ0FBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBUEYsVUFBVTs7SUFRWCw0QkFBQztDQUFBLEFBUkQsQ0FDMkMsaUJBQWlCLEdBTzNEO1NBUFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlQWN0aW9uc1NlcnZpY2UgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElkZUFjdGlvbnNTZXJ2aWNlSW1wbCBleHRlbmRzIElkZUFjdGlvbnNTZXJ2aWNlIHtcbiAgZG9TYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2F2ZSQubmV4dCgpO1xuICB9XG4gIHNhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==