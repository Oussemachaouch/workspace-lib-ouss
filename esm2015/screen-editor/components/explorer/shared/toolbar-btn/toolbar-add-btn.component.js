/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ToolbarAddBtnComponent {
    constructor() {
        this.click = new EventEmitter();
    }
}
ToolbarAddBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-toolbar-add-btn',
                template: `
    <p-button
      icon="fa fa-fw fa-plus"
      pTooltip="{{ tooltip }}"
      tooltipPosition="bottom"
      (click)="click.emit($event)"
    ></p-button>
  `,
                styles: [`
      :host ::ng-deep .ui-button {
        color: #d83431;
        background: transparent;
        border: none;
        border-radius: 0;
        height: 25px;
        width: 25px;
        margin-right: 0;
        margin-left: 2px;
      }
    `,
                    `
      :host ::ng-deep .ui-button:focus,
      :host ::ng-deep .ui-button:enabled:hover {
        background: transparent;
        color: #d83431 !important;
      }
    `]
            }] }
];
ToolbarAddBtnComponent.propDecorators = {
    tooltip: [{ type: Input }],
    click: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ToolbarAddBtnComponent.prototype.tooltip;
    /** @type {?} */
    ToolbarAddBtnComponent.prototype.click;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1hZGQtYnRuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9zaGFyZWQvdG9vbGJhci1idG4vdG9vbGJhci1hZGQtYnRuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtDdkUsTUFBTSxPQUFPLHNCQUFzQjtJQWhDbkM7UUFrQ1ksVUFBSyxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBQzdFLENBQUM7OztZQW5DQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7eUJBRUM7Ozs7Ozs7Ozs7O0tBV0M7b0JBQ0Q7Ozs7OztLQU1DO2FBRUo7OztzQkFFRSxLQUFLO29CQUNMLE1BQU07Ozs7SUFEUCx5Q0FBeUI7O0lBQ3pCLHVDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXRvb2xiYXItYWRkLWJ0bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAtYnV0dG9uXG4gICAgICBpY29uPVwiZmEgZmEtZncgZmEtcGx1c1wiXG4gICAgICBwVG9vbHRpcD1cInt7IHRvb2x0aXAgfX1cIlxuICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgIChjbGljayk9XCJjbGljay5lbWl0KCRldmVudClcIlxuICAgID48L3AtYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjZDgzNDMxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICB9XG4gICAgYCxcbiAgICBgXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbjpmb2N1cyxcbiAgICAgIDpob3N0IDo6bmctZGVlcCAudWktYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICNkODM0MzEgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckFkZEJ0bkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG59XG4iXX0=