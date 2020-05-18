/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
import { PreviewStore } from '../../store';
import { PreviewerLoadingService } from '../../loading/services/previewer-loading.service';
var PreviewService = /** @class */ (function () {
    function PreviewService(http, previewStore, slidingMessageService, previewerLodingService) {
        this.http = http;
        this.previewStore = previewStore;
        this.slidingMessageService = slidingMessageService;
        this.previewerLodingService = previewerLodingService;
    }
    PreviewService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PreviewService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: PreviewStore },
        { type: IdeMessageService },
        { type: PreviewerLoadingService }
    ]; };
    return PreviewService;
}());
export { PreviewService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PreviewService.prototype.init$;
    /**
     * @type {?}
     * @private
     */
    PreviewService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PreviewService.prototype.previewStore;
    /**
     * @type {?}
     * @private
     */
    PreviewService.prototype.slidingMessageService;
    /**
     * @type {?}
     * @private
     */
    PreviewService.prototype.previewerLodingService;
}
/**
 * @record
 */
export function View() { }
if (false) {
    /** @type {?|undefined} */
    View.prototype.html;
    /** @type {?|undefined} */
    View.prototype.componentsLibraryModules;
    /** @type {?|undefined} */
    View.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb3JlL3NlcnZpY2VzL2FwaS9wcmV2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFM0Y7SUFJRSx3QkFDVSxJQUFnQixFQUNoQixZQUEwQixFQUMxQixxQkFBd0MsRUFDeEMsc0JBQStDO1FBSC9DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFtQjtRQUN4QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXlCO0lBRXRELENBQUM7O2dCQVZMLFVBQVU7Ozs7Z0JBVkYsVUFBVTtnQkFPVixZQUFZO2dCQUZaLGlCQUFpQjtnQkFHakIsdUJBQXVCOztJQXFDaEMscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSxjQUFjOzs7Ozs7SUFDekIsK0JBQXVDOzs7OztJQUdyQyw4QkFBd0I7Ozs7O0lBQ3hCLHNDQUFrQzs7Ozs7SUFDbEMsK0NBQWdEOzs7OztJQUNoRCxnREFBdUQ7Ozs7O0FBNEIzRCwwQkFJQzs7O0lBSEMsb0JBQWM7O0lBQ2Qsd0NBQStCOztJQUMvQixxQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTY3JlZW4sIE1vZHVsZSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9zaGFyZWQnO1xuaW1wb3J0IHsgSWRlTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50L21lc3NhZ2VzJztcblxuaW1wb3J0IHsgUHJldmlld1N0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuaW1wb3J0IHsgUHJldmlld2VyTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9sb2FkaW5nL3NlcnZpY2VzL3ByZXZpZXdlci1sb2FkaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJldmlld1NlcnZpY2Uge1xuICBwcml2YXRlIGluaXQkOiBCZWhhdmlvclN1YmplY3Q8TW9kdWxlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBwcmV2aWV3U3RvcmU6IFByZXZpZXdTdG9yZSxcbiAgICBwcml2YXRlIHNsaWRpbmdNZXNzYWdlU2VydmljZTogSWRlTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcmV2aWV3ZXJMb2RpbmdTZXJ2aWNlOiBQcmV2aWV3ZXJMb2FkaW5nU2VydmljZSxcbiAvLyAgIEBJbmplY3QoJ0FQSV9QQVRIUycpIHByaXZhdGUgYXBpOiBzdHJpbmdcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgc2NyZWVuRGF0YUNvbnRlbnQgdG8gdGhlIHNlcnZlciB3aGljaCByZXR1cm5zXG4gICAqIGFuIE9ic2VydmFibGUgb3ZlciBhIFZpZXcgT2JqZWN0IGFuZCB3cml0ZSB0aGUgcmV0dW5lZCBkYXRhIGludG8gaWZyYW1lVmlld1N1YmplY3QuXG4gICAqL1xuICAvKnJlbmRlclNjcmVlbihzY3JlZW5EYXRhOiBTY3JlZW4pOiBPYnNlcnZhYmxlPFZpZXc+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Vmlldz4oXG4gICAgICBgJHt0aGlzLmFwaVsnc2NyZWVuLWVkaXRvciddfS9wcmV2aWV3L3ZpZXdgLFxuICAgICAgc2NyZWVuRGF0YVxuICAgICk7XG4gIH1cblxuICBpbml0KCk6IE9ic2VydmFibGU8TW9kdWxlPiB7XG4gICAgaWYgKHRoaXMuaW5pdCQpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE1vZHVsZT4oYCR7dGhpcy5hcGlbJ3NjcmVlbi1lZGl0b3InXX0vcHJldmlldy9pbml0YCwge30pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKG1vZHVsZSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TW9kdWxlPihtb2R1bGUpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfSovXG59XG5leHBvcnQgaW50ZXJmYWNlIFZpZXcge1xuICBodG1sPzogc3RyaW5nO1xuICBjb21wb25lbnRzTGlicmFyeU1vZHVsZXM/OiBhbnk7XG4gIGVycm9yPzogc3RyaW5nO1xufVxuIl19