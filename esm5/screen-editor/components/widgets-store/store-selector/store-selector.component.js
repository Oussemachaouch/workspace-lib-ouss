/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var StoreSelectorComponent = /** @class */ (function () {
    function StoreSelectorComponent() {
        this.selectStore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StoreSelectorComponent.prototype.select = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectStore.emit(event.value);
    };
    StoreSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-store-selector',
                    template: "<p-dropdown\n  [options]=\"stores\"\n  optionLabel=\"name\"\n  (onChange)=\"select($event)\"\n></p-dropdown>\n",
                    styles: [".store-tabs{display:-webkit-box;display:flex;overflow-y:auto;padding:0;font-size:xx-small}::ng-deep .tab-header button{width:180px;max-width:180px;height:25px;max-height:25px}.store-tabs::-webkit-scrollbar{height:0}.store-tabs::-webkit-scrollbar-thumb{display:none}:host ::ng-deep .ui-dropdown{width:100%!important}"]
                }] }
    ];
    StoreSelectorComponent.propDecorators = {
        stores: [{ type: Input }],
        selectStore: [{ type: Output }]
    };
    return StoreSelectorComponent;
}());
export { StoreSelectorComponent };
if (false) {
    /** @type {?} */
    StoreSelectorComponent.prototype.stores;
    /** @type {?} */
    StoreSelectorComponent.prototype.selectStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL3dpZGdldHMtc3RvcmUvc3RvcmUtc2VsZWN0b3Ivc3RvcmUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFO0lBQUE7UUFRWSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBS2xFLENBQUM7Ozs7O0lBSEMsdUNBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDBIQUE4Qzs7aUJBRS9DOzs7eUJBRUUsS0FBSzs4QkFFTCxNQUFNOztJQUtULDZCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksc0JBQXNCOzs7SUFDakMsd0NBQXVDOztJQUV2Qyw2Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lkZ2V0c0xpYnJhcnlNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXN0b3JlLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RvcmUtc2VsZWN0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlU2VsZWN0b3JDb21wb25lbnQge1xuICBASW5wdXQoKSBzdG9yZXM6IFdpZGdldHNMaWJyYXJ5TW9kZWxbXTtcblxuICBAT3V0cHV0KCkgc2VsZWN0U3RvcmUgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldHNMaWJyYXJ5TW9kZWw+KCk7XG5cbiAgc2VsZWN0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdFN0b3JlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG59XG4iXX0=