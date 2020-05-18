/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
export class ToolbarFinderComponent {
    constructor() {
        this.filterInput$ = new Subject();
        this.filter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.filterInput$
            .asObservable()
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.filter.emit(value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    doFilter(event) {
        this.filterInput$.next(event.target['value']);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1maW5kZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL2V4cGxvcmVyL3NoYXJlZC90b29sYmFyLWZpbmRlci90b29sYmFyLWZpbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFHWixLQUFLLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3BFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNVSxpQkFBWSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRzlELFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXdCNUQsQ0FBQzs7OztJQXBCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWTthQUNsQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUN2QjthQUNBLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBQ0QsUUFBUSxDQUFDLEtBQW9CO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixpUkFBOEM7O2FBRS9DOzs7cUJBSUUsTUFBTTswQkFHTixLQUFLOzs7Ozs7O0lBTE4sOENBQThEOzs7OztJQUM5RCw4Q0FBbUM7O0lBQ25DLHdDQUMwRDs7SUFFMUQsNkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy10b29sYmFyLWZpbmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLWZpbmRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rvb2xiYXItZmluZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyRmluZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGZpbHRlcklucHV0JDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KClcbiAgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmZpbHRlcklucHV0JFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlci5lbWl0KHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG4gIGRvRmlsdGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5maWx0ZXJJbnB1dCQubmV4dChldmVudC50YXJnZXRbJ3ZhbHVlJ10pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19