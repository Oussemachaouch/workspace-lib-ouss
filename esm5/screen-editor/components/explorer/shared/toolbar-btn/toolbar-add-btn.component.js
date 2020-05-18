/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ToolbarAddBtnComponent = /** @class */ (function () {
    function ToolbarAddBtnComponent() {
        this.click = new EventEmitter();
    }
    ToolbarAddBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-toolbar-add-btn',
                    template: "\n    <p-button\n      icon=\"fa fa-fw fa-plus\"\n      pTooltip=\"{{ tooltip }}\"\n      tooltipPosition=\"bottom\"\n      (click)=\"click.emit($event)\"\n    ></p-button>\n  ",
                    styles: ["\n      :host ::ng-deep .ui-button {\n        color: #d83431;\n        background: transparent;\n        border: none;\n        border-radius: 0;\n        height: 25px;\n        width: 25px;\n        margin-right: 0;\n        margin-left: 2px;\n      }\n    ",
                        "\n      :host ::ng-deep .ui-button:focus,\n      :host ::ng-deep .ui-button:enabled:hover {\n        background: transparent;\n        color: #d83431 !important;\n      }\n    "]
                }] }
    ];
    ToolbarAddBtnComponent.propDecorators = {
        tooltip: [{ type: Input }],
        click: [{ type: Output }]
    };
    return ToolbarAddBtnComponent;
}());
export { ToolbarAddBtnComponent };
if (false) {
    /** @type {?} */
    ToolbarAddBtnComponent.prototype.tooltip;
    /** @type {?} */
    ToolbarAddBtnComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1hZGQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9zaGFyZWQvdG9vbGJhci1idG4vdG9vbGJhci1hZGQtYnRuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RTtJQUFBO1FBa0NZLFVBQUssR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUM3RSxDQUFDOztnQkFuQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrTEFPVDs2QkFFQyxvUUFXQzt3QkFDRCxrTEFNQztpQkFFSjs7OzBCQUVFLEtBQUs7d0JBQ0wsTUFBTTs7SUFDVCw2QkFBQztDQUFBLEFBbkNELElBbUNDO1NBSFksc0JBQXNCOzs7SUFDakMseUNBQXlCOztJQUN6Qix1Q0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy10b29sYmFyLWFkZC1idG4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwLWJ1dHRvblxuICAgICAgaWNvbj1cImZhIGZhLWZ3IGZhLXBsdXNcIlxuICAgICAgcFRvb2x0aXA9XCJ7eyB0b29sdGlwIH19XCJcbiAgICAgIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAoY2xpY2spPVwiY2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICA+PC9wLWJ1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51aS1idXR0b24ge1xuICAgICAgICBjb2xvcjogI2Q4MzQzMTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgfVxuICAgIGAsXG4gICAgYFxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51aS1idXR0b246Zm9jdXMsXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbjplbmFibGVkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjZDgzNDMxICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJBZGRCdG5Db21wb25lbnQge1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xufVxuIl19