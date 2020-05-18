/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ToolbarSaveBtnComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
ToolbarSaveBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-toolbar-save-btn',
                template: `
    <p-button
      icon="fa fa-fw fa-check"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit()"
    ></p-button>
  `,
                styles: [`
      :host ::ng-deep .ui-button {
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
        color: #4caf50;
      }
      :host ::ng-deep .ui-button .ui-button-text {
        padding: 0px 19px;
      }
      :host ::ng-deep .ui-button-text-icon-left .ui-button-icon-left {
        font-size: 12px;
        top: 14px;
        left: 2px;
      }
    `,
                    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        color: #4caf50;
        background: transparent;
      }
    `]
            }] }
];
ToolbarSaveBtnComponent.propDecorators = {
    tooltip: [{ type: Input }],
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ToolbarSaveBtnComponent.prototype.tooltip;
    /** @type {?} */
    ToolbarSaveBtnComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zYXZlLWJ0bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvZXhwbG9yZXIvc2hhcmVkL3Rvb2xiYXItYnRuL3Rvb2xiYXItc2F2ZS1idG4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEN2RSxNQUFNLE9BQU8sdUJBQXVCO0lBeENwQztRQTBDWSxVQUFLLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFDN0UsQ0FBQzs7O1lBM0NBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDt5QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CQztvQkFDRDs7Ozs7O0tBTUM7YUFFSjs7O3NCQUVFLEtBQUs7b0JBQ0wsTUFBTTs7OztJQURQLDBDQUF5Qjs7SUFDekIsd0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2MtdG9vbGJhci1zYXZlLWJ0bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAtYnV0dG9uXG4gICAgICBpY29uPVwiZmEgZmEtZncgZmEtY2hlY2tcIlxuICAgICAgcFRvb2x0aXA9XCJ7eyB0b29sdGlwIH19XCJcbiAgICAgIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAoY2xpY2spPVwiY2xpY2suZW1pdCgpXCJcbiAgICA+PC9wLWJ1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51aS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC51aS1idXR0b24gLnVpLWJ1dHRvbi10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMHB4IDE5cHg7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbi10ZXh0LWljb24tbGVmdCAudWktYnV0dG9uLWljb24tbGVmdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICBsZWZ0OiAycHg7XG4gICAgICB9XG4gICAgYCxcbiAgICBgXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbjpmb2N1cyxcbiAgICAgIDpob3N0IDo6bmctZGVlcCAudWktYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzRjYWY1MDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTYXZlQnRuQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbn1cbiJdfQ==