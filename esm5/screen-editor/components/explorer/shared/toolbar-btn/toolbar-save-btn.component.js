/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ToolbarSaveBtnComponent = /** @class */ (function () {
    function ToolbarSaveBtnComponent() {
        this.click = new EventEmitter();
    }
    ToolbarSaveBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-toolbar-save-btn',
                    template: "\n    <p-button\n      icon=\"fa fa-fw fa-check\"\n      pTooltip=\"{{ tooltip }}\"\n      tooltipPosition=\"bottom\"\n      (click)=\"click.emit()\"\n    ></p-button>\n  ",
                    styles: ["\n      :host ::ng-deep .ui-button {\n        background: transparent;\n        border: none;\n        border-radius: 0;\n        height: 25px;\n        width: 25px;\n        margin-right: 0;\n        margin-left: 2px;\n        color: #4caf50;\n      }\n      :host ::ng-deep .ui-button .ui-button-text {\n        padding: 0px 19px;\n      }\n      :host ::ng-deep .ui-button-text-icon-left .ui-button-icon-left {\n        font-size: 12px;\n        top: 14px;\n        left: 2px;\n      }\n    ",
                        "\n      :host ::ng-deep .ui-button:focus,\n      :host ::ng-deep .ui-button:enabled:hover {\n        color: #4caf50;\n        background: transparent;\n      }\n    "]
                }] }
    ];
    ToolbarSaveBtnComponent.propDecorators = {
        tooltip: [{ type: Input }],
        click: [{ type: Output }]
    };
    return ToolbarSaveBtnComponent;
}());
export { ToolbarSaveBtnComponent };
if (false) {
    /** @type {?} */
    ToolbarSaveBtnComponent.prototype.tooltip;
    /** @type {?} */
    ToolbarSaveBtnComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zYXZlLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvc2hhcmVkL3Rvb2xiYXItYnRuL3Rvb2xiYXItc2F2ZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUEwQ1ksVUFBSyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzdFLENBQUM7O2dCQTNDQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDZLQU9UOzZCQUVDLGdmQW1CQzt3QkFDRCx1S0FNQztpQkFFSjs7OzBCQUVFLEtBQUs7d0JBQ0wsTUFBTTs7SUFDVCw4QkFBQztDQUFBLEFBM0NELElBMkNDO1NBSFksdUJBQXVCOzs7SUFDbEMsMENBQXlCOztJQUN6Qix3Q0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy10b29sYmFyLXNhdmUtYnRuJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cC1idXR0b25cbiAgICAgIGljb249XCJmYSBmYS1mdyBmYS1jaGVja1wiXG4gICAgICBwVG9vbHRpcD1cInt7IHRvb2x0aXAgfX1cIlxuICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgIChjbGljayk9XCJjbGljay5lbWl0KClcIlxuICAgID48L3AtYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgY29sb3I6ICM0Y2FmNTA7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbiAudWktYnV0dG9uLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTlweDtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAudWktYnV0dG9uLXRleHQtaWNvbi1sZWZ0IC51aS1idXR0b24taWNvbi1sZWZ0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgIH1cbiAgICBgLFxuICAgIGBcbiAgICAgIDpob3N0IDo6bmctZGVlcCAudWktYnV0dG9uOmZvY3VzLFxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51aS1idXR0b246ZW5hYmxlZDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhclNhdmVCdG5Db21wb25lbnQge1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xufVxuIl19