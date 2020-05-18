/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class StoreSelectorComponent {
    constructor() {
        this.selectStore = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    select(event) {
        this.selectStore.emit(event.value);
    }
}
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
if (false) {
    /** @type {?} */
    StoreSelectorComponent.prototype.stores;
    /** @type {?} */
    StoreSelectorComponent.prototype.selectStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsic2NyZWVuLWVkaXRvci9jb21wb25lbnRzL3dpZGdldHMtc3RvcmUvc3RvcmUtc2VsZWN0b3Ivc3RvcmUtc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRWSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO0lBS2xFLENBQUM7Ozs7O0lBSEMsTUFBTSxDQUFDLEtBQVU7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDBIQUE4Qzs7YUFFL0M7OztxQkFFRSxLQUFLOzBCQUVMLE1BQU07Ozs7SUFGUCx3Q0FBdUM7O0lBRXZDLDZDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaWRnZXRzTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Mtc3RvcmUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdG9yZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZWxlY3RvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN0b3JlczogV2lkZ2V0c0xpYnJhcnlNb2RlbFtdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RTdG9yZSA9IG5ldyBFdmVudEVtaXR0ZXI8V2lkZ2V0c0xpYnJhcnlNb2RlbD4oKTtcblxuICBzZWxlY3QoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0U3RvcmUuZW1pdChldmVudC52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==