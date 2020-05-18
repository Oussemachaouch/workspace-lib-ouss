/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
var ToolbarFinderComponent = /** @class */ (function () {
    function ToolbarFinderComponent() {
        this.filterInput$ = new Subject();
        this.filter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ToolbarFinderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.filterInput$
            .asObservable()
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.filter.emit(value);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarFinderComponent.prototype.doFilter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.filterInput$.next(event.target['value']);
    };
    /**
     * @return {?}
     */
    ToolbarFinderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ToolbarFinderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-toolbar-finder',
                    template: "<div class=\"ui-inputgroup filter-input\">\n  <input\n    type=\"text\"\n    (keyup)=\"doFilter($event)\"\n    pInputText\n    placeholder=\"{{placeHolder}}\"\n  />\n  <span class=\"ui-inputgroup-addon\">\n    <i class=\"fa fa-search\"></i>\n  </span>\n</div>\n",
                    styles: [".filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}"]
                }] }
    ];
    ToolbarFinderComponent.propDecorators = {
        filter: [{ type: Output }],
        placeHolder: [{ type: Input }]
    };
    return ToolbarFinderComponent;
}());
export { ToolbarFinderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToolbarFinderComponent.prototype.filterInput$;
    /**
     * @type {?}
     * @private
     */
    ToolbarFinderComponent.prototype.subscription;
    /** @type {?} */
    ToolbarFinderComponent.prototype.filter;
    /** @type {?} */
    ToolbarFinderComponent.prototype.placeHolder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1maW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL3NoYXJlZC90b29sYmFyLWZpbmRlci90b29sYmFyLWZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFHWixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFO0lBQUE7UUFNVSxpQkFBWSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRzlELFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXdCNUQsQ0FBQzs7OztJQXBCQyx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVk7YUFDbEMsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FDdkI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUNELHlDQUFROzs7O0lBQVIsVUFBUyxLQUFvQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixpUkFBOEM7O2lCQUUvQzs7O3lCQUlFLE1BQU07OEJBR04sS0FBSzs7SUFzQlIsNkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSxzQkFBc0I7Ozs7OztJQUNqQyw4Q0FBOEQ7Ozs7O0lBQzlELDhDQUFtQzs7SUFDbkMsd0NBQzBEOztJQUUxRCw2Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXRvb2xiYXItZmluZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXItZmluZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci1maW5kZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJGaW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZmlsdGVySW5wdXQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKVxuICBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsdGVySW5wdXQkXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyLmVtaXQodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cbiAgZG9GaWx0ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmZpbHRlcklucHV0JC5uZXh0KGV2ZW50LnRhcmdldFsndmFsdWUnXSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=