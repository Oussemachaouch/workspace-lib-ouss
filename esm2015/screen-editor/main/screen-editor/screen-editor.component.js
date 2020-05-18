/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
import { UnloadModuleService, LayoutService } from '../../core/services';
import { SwaggerServicesStore } from '../../core/store';
import { Device } from '../../models/device';
import { Navigator } from '../../components/explorer/navigator/navigator';
export class ScreenEditorComponent {
    /**
     * @param {?} unloadModuleService
     * @param {?} layoutService
     * @param {?} workspaceApi
     * @param {?} swaggerServicesStore
     * @param {?} navigator
     */
    constructor(unloadModuleService, layoutService, workspaceApi, swaggerServicesStore, navigator) {
        this.unloadModuleService = unloadModuleService;
        this.layoutService = layoutService;
        this.workspaceApi = workspaceApi;
        this.swaggerServicesStore = swaggerServicesStore;
        this.navigator = navigator;
        this.selectedDevice = Device.DESKTOP;
        this.landscapeMode = false;
        this.collapseComponents = false;
        this.collapseProperties = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //  this.featuresManagementStore.dispatch(loadFeatures());
        // this.widgetsLibrairiesStore.dispatch(LOAD_WIDEGTS_LIBRAIRIES());
        // this.screensLibrairiesStore.dispatch(LOAD_SCREENS_LIBRAIRIES());
        // this.modelsManagementStore.dispatch(LOAD_MODELS());
        this.navigator.goToFeatureExplorer();
        this.displayDeviceSwitcher$ = this.layoutService
            .isUcPolicyModeActive()
            .pipe(map((/**
         * @param {?} display
         * @return {?}
         */
        display => !display)));
        this.displayUseCasePolicy$ = this.layoutService.isUcPolicyModeActive();
        /*  this.propertiesTitle$ = this.propertiesManagementStore
            .select(getProperties)
            .pipe(
              map(value =>
                value && value.data && value.data.type ? value.data.type : ''
              ),
              distinctUntilChanged()
            );
      */
        this.swaggerServices$ = this.workspaceApi
            .getServices()
            .subscribe((/**
         * @param {?} services
         * @return {?}
         */
        services => {
            this.swaggerServicesStore.next(services);
        }));
    }
    /**
     * @return {?}
     */
    onCollapseComponents() {
        this.collapseComponents = !this.collapseComponents;
    }
    /**
     * @return {?}
     */
    onCollapseProperties() {
        this.collapseProperties = !this.collapseProperties;
    }
    /**
     * @param {?} device
     * @return {?}
     */
    selectDevice(device) {
        this.selectedDevice = device;
    }
    /**
     * @param {?} landscapeMode
     * @return {?}
     */
    changeLayout(landscapeMode) {
        this.landscapeMode = landscapeMode;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unloadModuleService.unloadModules();
        if (this.swaggerServices$) {
            this.swaggerServices$.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    backToPreview() {
        this.layoutService.disableUcPolicyMode();
    }
}
ScreenEditorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'screen-editor',
                template: "<global-layout>\n  <!-- Screens -->\n  <left-container class=\"left-container screen-container\">\n    <p-panel class=\"screen-panel\">\n      <p-header>\n        <div class=\"header-switcher\">\n          <p-button label=\"Data Model\" class=\"selected\"> </p-button>\n        </div>\n      </p-header>\n      <sc-explorer></sc-explorer>\n    </p-panel>\n  </left-container>\n  <!-- Screens -->\n\n  <!-- Preview -->\n  <center-container class=\"center-container\">\n    <p-panel class=\"preview-panel\">\n      <p-header>\n        <div class=\"custom-header\">\n          <div>\n            <span *ngIf=\"(displayDeviceSwitcher$ | async) === true\"\n              >Configuration</span\n            >\n\n            <div\n              *ngIf=\"(displayUseCasePolicy$ | async) === true\"\n              class=\"policy\"\n            >\n              <p-button\n                icon=\"fa fa-fw fa-arrow-left\"\n                class=\"back-button\"\n                pTooltip=\"Back to preview\"\n                tooltipPosition=\"bottom\"\n                showDelay=\"1000\"\n                hideDelay=\"500\"\n                (onClick)=\"backToPreview()\"\n              ></p-button>\n              <span>UseCase policy</span>\n            </div>\n          </div>\n          <div class=\"header-actions\">\n\n          </div>\n        </div>\n      </p-header>\n      <sc-preview\n        [device]=\"selectedDevice\"\n        [landscapeMode]=\"landscapeMode\"\n        [ngClass]=\"{ hide: displayUseCasePolicy$ | async }\"\n      ></sc-preview>\n    </p-panel>\n  </center-container>\n  <!-- Preview -->\n\n  <!-- Properties -->\n  <right-container class=\"right-container\">\n    <div\n      class=\"components-container\"\n      [class.collapse-container]=\"collapseComponents\"\n    >\n      <sc-widgets-to-screen-switcher\n        [collapseProperties]=\"collapseProperties\"\n        (collapse)=\"onCollapseComponents()\"\n      >\n      </sc-widgets-to-screen-switcher>\n    </div>\n    <!--<div\n      class=\"proprties-container\"\n      [class.collapse-container]=\"collapseProperties\"\n    >\n      <p-panel\n        class=\"proprties-panel\"\n        collapseIcon=\"fa fa-angle-down\"\n        expandIcon=\"fa fa-angle-up\"\n        [toggleable]=\"!collapseComponents\"\n        (onBeforeToggle)=\"onCollapseProperties()\"\n      >\n        <p-header>\n          <span>{{ propertiesTitle$ | async }} properties</span>\n        </p-header>\n        <sc-properties></sc-properties>\n      </p-panel>\n    </div>-->\n  </right-container>\n  <!-- Properties -->\n</global-layout>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i);.left-container{width:100%}.left-container sc-explorer{display:block}.right-container{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.components-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.components-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.proprties-container{-webkit-box-flex:1;flex:1;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:50%}.proprties-container .card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:49px}.components-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.components-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}.proprties-container.collapse-container{-webkit-box-flex:0;flex:0 1 32px;-webkit-transition:.5s ease-out;transition:.5s ease-out;height:32px}.proprties-container.collapse-container .card-body{display:none;-webkit-transition:.5s linear;transition:.5s linear}sc-preview.hide{display:none}:host ::ng-deep .ui-overlaypanel-close{top:0;right:0}:host ::ng-deep .policy .back-button .ui-button{height:auto}:host ::ng-deep a{color:#848484}:host ::ng-deep a:focus{outline:0!important}:host ::ng-deep a:active{outline:0!important}:host ::ng-deep .ui-button{border:none;border-radius:0;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-button:focus{outline:0!important;border:none}:host ::ng-deep .ui-button:active{outline:0!important}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-button:enabled:hover{border:none;border-radius:0}:host ::ng-deep .ui-tree .ui-button-icon-only:focus{outline:0!important}:host ::ng-deep .ui-tree .ui-button-icon-only:active{outline:0!important}:host ::ng-deep .ui-tree .ui-treenode-icon{font-size:12px}:host ::ng-deep .ui-tree .ui-treenode-label{padding:0 2px}:host ::ng-deep .ui-tree .ui-treenode-children{padding:0 0 0 10px}:host ::ng-deep .ui-widget{font-family:Karla,sans-serif}:host ::ng-deep .screen-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .screen-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .screen-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;width:100%;overflow-y:hidden}:host ::ng-deep .screen-panel .component-panel .ui-panel.ui-widget{width:auto}:host ::ng-deep .components-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .components-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .components-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .components-panel .ui-panel .ui-panel-content{height:100%;overflow:auto;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;width:315px;background:#ffffffff;padding:0}:host ::ng-deep .proprties-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:none;height:30px;padding:5px 10px 5px 20px;font-size:14px;text-transform:uppercase;background:#c6c6c6}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content{padding:10px;height:100%;overflow:auto}:host ::ng-deep .proprties-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%}:host ::ng-deep .proprties-panel .ui-panel-titlebar span{max-width:270px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ::ng-deep .preview-panel .ui-panel.ui-widget{height:100%;overflow:hidden;border-radius:0;border:none;border-left:1px solid #c6c6c6;border-right:1px solid #c6c6c6;padding:0}:host ::ng-deep .preview-panel .ui-panel.ui-widget .ui-panel-titlebar{border-radius:0;border:#eee;height:30px;padding:0 10px;font-size:14px;text-transform:uppercase;background:#eee}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content{padding:5px;height:100%;overflow:auto}:host ::ng-deep .preview-panel .ui-panel .ui-panel-content-wrapper{height:calc(100% - 30px);overflow:hidden;overflow-y:auto;width:100%;overflow-x:auto}:host ::ng-deep .preview-panel .header-actions .ui-button{border:none;color:#000;background:0 0;border-radius:0;height:30px;width:30px}:host ::ng-deep .ui-dialog{border:none;border-radius:0}:host ::ng-deep .ui-dialog .ui-dialog-content{border:0}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-close{color:#414a4b;font-size:20px;border:none}:host ::ng-deep .ui-dialog .ui-dialog-footer{border:none;margin-top:20px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon{margin-top:3px}:host ::ng-deep .ui-dialog .ui-dialog-titlebar-icon:hover{background:0 0;border:none}:host ::ng-deep .edit-screen-panel .ui-panel.ui-widget .ui-panel-titlebar{text-transform:none}:host ::ng-deep .fa:active{outline:0!important}:host ::ng-deep .fa:focus{outline:0!important}:host ::ng-deep .ui-widget-content{background-color:#fff!important}:host ::ng-deep .ui-panel .ui-panel-content{border:none!important}:host ::ng-deep .ui-panel .ui-panel-titlebar-icon{background:0 0;border:none;-webkit-transition:.3s;transition:.3s}:host ::ng-deep .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover{border:none;background:0 0;color:#eee}:host ::ng-deep .ui-panel.ui-widget .ui-panel-titlebar-icon span{font-size:16px}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar{padding:11px 20px;height:45px;background:#fff;border-bottom:1px solid #f1f1f1}:host ::ng-deep .ui-dialog.ui-widget .ui-dialog-titlebar .ui-dialog-title{color:#414a4b;font-weight:700}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-content{background:#f9f9f9;color:#d83431;margin-top:20px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button{background:0 0;color:#414a4b;height:35px}:host ::ng-deep .ui-dialog.ui-confirmdialog .ui-dialog-footer .ui-button:first-child{background:#eee;color:#4caf50;height:35px}:host ::ng-deep .ui-dropdown{border:none;border-radius:0;box-shadow:none}:host ::ng-deep .ui-dropdown .ui-dropdown-panel{border:none;border-radius:0}:host ::ng-deep .ui-dropdown label.ui-dropdown-label{background:#eee;border-radius:2px;height:30px;width:180px}:host ::ng-deep .ui-dropdown .ui-dropdown-trigger.ui-state-default.ui-corner-right{background-color:#eee;margin-top:0;margin-right:1px;border-bottom:1px solid #c6c6c6;border-top:1px solid #c6c6c6;border-right:1px solid #c6c6c6;border-radius:2px;height:30px}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-list{padding:0}:host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{border-radius:0;padding:5px 7px}:host ::ng-deep .ui-messages-error{border:none;color:#d83431;background:#f9f9f9}:host ::ng-deep .ui-autocomplete-dd input.ui-corner-all{border:none;background:#eee;height:30px}:host ::ng-deep .ui-autocomplete-dd .ui-autocomplete-dropdown.ui-corner-all{background:#eee;color:#222;height:30px}:host ::ng-deep .ui-inputtext{height:30px;border-radius:2px;border:1px solid #c6c6c6}:host ::ng-deep .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .ui-autocomplete .ui-autocomplete-panel{border-radius:0}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item{border-radius:0;padding:5px 15px}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list-item.ui-state-highlight{background:#e0e0e0;color:#222}:host ::ng-deep .ui-autocomplete-panel .ui-autocomplete-list{padding:0}:host ::ng-deep .ui-inputswitch{height:14px;width:34px!important;overflow:visible;background-color:#9e9e9e;border-color:#9e9e9e;border-radius:8px}:host ::ng-deep .ui-inputswitch .ui-inputswitch-handle{top:-4px;background-color:#fff;border-radius:50%;-webkit-transition:.3s;transition:.3s;width:20px!important;height:20px!important;box-shadow:rgba(0,0,0,.2) 0 1px 3px 0,rgba(0,0,0,.137255) 0 1px 1px 0,rgba(0,0,0,.117647) 0 2px 1px -1px;border:none}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-on span{visibility:hidden}:host ::ng-deep .ui-inputswitch .ui-inputswitch-off span{visibility:hidden}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked{background-color:#efadac;border-color:#efadac}:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-handle{background-color:#d83431;color:#d83431}:host ::ng-deep .header-switcher{margin-top:-2px;display:inline-block}:host ::ng-deep .header-switcher .selected button{background-color:#d83431;color:#eee}:host ::ng-deep .header-switcher button{color:#1b1d1f;background:#d9d9d9;height:27px}:host ::ng-deep .header-switcher button:enabled:hover{background-color:#d83431;color:#eee}.custom-header{height:30px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]
            }] }
];
/** @nocollapse */
ScreenEditorComponent.ctorParameters = () => [
    { type: UnloadModuleService },
    { type: LayoutService },
    { type: WorkspaceClientApi },
    { type: SwaggerServicesStore },
    { type: Navigator }
];
if (false) {
    /** @type {?} */
    ScreenEditorComponent.prototype.components;
    /** @type {?} */
    ScreenEditorComponent.prototype.componentLibrary;
    /** @type {?} */
    ScreenEditorComponent.prototype.selectedDevice;
    /** @type {?} */
    ScreenEditorComponent.prototype.landscapeMode;
    /** @type {?} */
    ScreenEditorComponent.prototype.collapseComponents;
    /** @type {?} */
    ScreenEditorComponent.prototype.collapseProperties;
    /** @type {?} */
    ScreenEditorComponent.prototype.componentLibraries$;
    /** @type {?} */
    ScreenEditorComponent.prototype.displayDeviceSwitcher$;
    /** @type {?} */
    ScreenEditorComponent.prototype.displayUseCasePolicy$;
    /** @type {?} */
    ScreenEditorComponent.prototype.propertiesTitle$;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.swaggerServices$;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.unloadModuleService;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.workspaceApi;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.swaggerServicesStore;
    /**
     * @type {?}
     * @private
     */
    ScreenEditorComponent.prototype.navigator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b3Jrc3BhY2UtbGliLW91c3MvIiwic291cmNlcyI6WyJzY3JlZW4tZWRpdG9yL21haW4vc2NyZWVuLWVkaXRvci9zY3JlZW4tZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLEdBQUcsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQVMxRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7OztJQWlCaEMsWUFDVSxtQkFBd0MsRUFDeEMsYUFBNEIsRUFDNUIsWUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFNBQW9CO1FBSnBCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQW5COUIsbUJBQWMsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7SUFzQnhCLENBQUM7Ozs7SUFFSixRQUFRO1FBQ1IsMERBQTBEO1FBQ3hELG1FQUFtRTtRQUNsRSxtRUFBbUU7UUFDcEUsc0RBQXNEO1FBRXRELElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGFBQWE7YUFDN0Msb0JBQW9CLEVBQUU7YUFDdEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pFOzs7Ozs7OztRQVFBO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ3RDLFdBQVcsRUFBRTthQUNiLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxhQUFhO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7OztZQXhGRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwyaUZBQTZDOzthQUU5Qzs7OztZQWJRLG1CQUFtQjtZQUFFLGFBQWE7WUFGbEMsa0JBQWtCO1lBR2xCLG9CQUFvQjtZQUlwQixTQUFTOzs7O0lBVWhCLDJDQUEwQjs7SUFDMUIsaURBQXNDOztJQUN0QywrQ0FBd0M7O0lBQ3hDLDhDQUFzQjs7SUFDdEIsbURBQTJCOztJQUMzQixtREFBMkI7O0lBQzNCLG9EQUF1RDs7SUFFdkQsdURBQTRDOztJQUU1QyxzREFBMkM7O0lBRTNDLGlEQUFrQzs7Ozs7SUFFbEMsaURBQXVDOzs7OztJQUdyQyxvREFBZ0Q7Ozs7O0lBQ2hELDhDQUFvQzs7Ozs7SUFDcEMsNkNBQXdDOzs7OztJQUN4QyxxREFBa0Q7Ozs7O0lBQ2xELDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXb3Jrc3BhY2VDbGllbnRBcGkgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvY2xpZW50JztcblxuaW1wb3J0IHsgVW5sb2FkTW9kdWxlU2VydmljZSwgTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgU3dhZ2dlclNlcnZpY2VzU3RvcmUgfSBmcm9tICcuLi8uLi9jb3JlL3N0b3JlJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9kZXZpY2UnO1xuaW1wb3J0IHsgVWlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvd2lkZ2V0cy1saWJyYXJ5L3VpLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRzTGlicmFyeU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3dpZGdldHMtbGlicmFyeS9tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V4cGxvcmVyL25hdmlnYXRvci9uYXZpZ2F0b3InO1xuXG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NjcmVlbi1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NyZWVuLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjcmVlbi1lZGl0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY3JlZW5FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbXBvbmVudHM6IFVpQ29tcG9uZW50W107XG4gIGNvbXBvbmVudExpYnJhcnk6IFdpZGdldHNMaWJyYXJ5TW9kZWw7XG4gIHNlbGVjdGVkRGV2aWNlOiBEZXZpY2UgPSBEZXZpY2UuREVTS1RPUDtcbiAgbGFuZHNjYXBlTW9kZSA9IGZhbHNlO1xuICBjb2xsYXBzZUNvbXBvbmVudHMgPSBmYWxzZTtcbiAgY29sbGFwc2VQcm9wZXJ0aWVzID0gZmFsc2U7XG4gIGNvbXBvbmVudExpYnJhcmllcyQ6IE9ic2VydmFibGU8V2lkZ2V0c0xpYnJhcnlNb2RlbFtdPjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbiAgZGlzcGxheURldmljZVN3aXRjaGVyJDogT2JzZXJ2YWJsZTxCb29sZWFuPjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbiAgZGlzcGxheVVzZUNhc2VQb2xpY3kkOiBPYnNlcnZhYmxlPEJvb2xlYW4+O1xuXG4gIHByb3BlcnRpZXNUaXRsZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBwcml2YXRlIHN3YWdnZXJTZXJ2aWNlcyQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVubG9hZE1vZHVsZVNlcnZpY2U6IFVubG9hZE1vZHVsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgd29ya3NwYWNlQXBpOiBXb3Jrc3BhY2VDbGllbnRBcGksXG4gICAgcHJpdmF0ZSBzd2FnZ2VyU2VydmljZXNTdG9yZTogU3dhZ2dlclNlcnZpY2VzU3RvcmUsXG4gICAgcHJpdmF0ZSBuYXZpZ2F0b3I6IE5hdmlnYXRvcixcbiAgLy8gIHByaXZhdGUgZmVhdHVyZXNNYW5hZ2VtZW50U3RvcmU6IFN0b3JlPEZlYXR1cmVzU3RhdGU+LFxuICAgLy8gcHJpdmF0ZSB3aWRnZXRzTGlicmFpcmllc1N0b3JlOiBTdG9yZTxXaWRnZXRzTGlicmFpcmllc1N0YXRlPixcbiAgICAvLyBwcml2YXRlIHNjcmVlbnNMaWJyYWlyaWVzU3RvcmU6IFN0b3JlPFNjcmVlbnNMaWJyYWlyaWVzU3RhdGU+LFxuICAgIC8vIHByaXZhdGUgbW9kZWxzTWFuYWdlbWVudFN0b3JlOiBTdG9yZTxNb2RlbHNTdGF0ZT4sXG4gICAvLyBwcml2YXRlIHByb3BlcnRpZXNNYW5hZ2VtZW50U3RvcmU6IFN0b3JlPFByb3BlcnRpZXNTdGF0ZT5cbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAvLyAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnRTdG9yZS5kaXNwYXRjaChsb2FkRmVhdHVyZXMoKSk7XG4gICAgLy8gdGhpcy53aWRnZXRzTGlicmFpcmllc1N0b3JlLmRpc3BhdGNoKExPQURfV0lERUdUU19MSUJSQUlSSUVTKCkpO1xuICAgICAvLyB0aGlzLnNjcmVlbnNMaWJyYWlyaWVzU3RvcmUuZGlzcGF0Y2goTE9BRF9TQ1JFRU5TX0xJQlJBSVJJRVMoKSk7XG4gICAgLy8gdGhpcy5tb2RlbHNNYW5hZ2VtZW50U3RvcmUuZGlzcGF0Y2goTE9BRF9NT0RFTFMoKSk7XG5cbiAgICB0aGlzLm5hdmlnYXRvci5nb1RvRmVhdHVyZUV4cGxvcmVyKCk7XG4gICAgdGhpcy5kaXNwbGF5RGV2aWNlU3dpdGNoZXIkID0gdGhpcy5sYXlvdXRTZXJ2aWNlXG4gICAgICAuaXNVY1BvbGljeU1vZGVBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGRpc3BsYXkgPT4gIWRpc3BsYXkpKTtcbiAgICB0aGlzLmRpc3BsYXlVc2VDYXNlUG9saWN5JCA9IHRoaXMubGF5b3V0U2VydmljZS5pc1VjUG9saWN5TW9kZUFjdGl2ZSgpO1xuICAvKiAgdGhpcy5wcm9wZXJ0aWVzVGl0bGUkID0gdGhpcy5wcm9wZXJ0aWVzTWFuYWdlbWVudFN0b3JlXG4gICAgICAuc2VsZWN0KGdldFByb3BlcnRpZXMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHZhbHVlID0+XG4gICAgICAgICAgdmFsdWUgJiYgdmFsdWUuZGF0YSAmJiB2YWx1ZS5kYXRhLnR5cGUgPyB2YWx1ZS5kYXRhLnR5cGUgOiAnJ1xuICAgICAgICApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApO1xuKi9cbiAgICB0aGlzLnN3YWdnZXJTZXJ2aWNlcyQgPSB0aGlzLndvcmtzcGFjZUFwaVxuICAgICAgLmdldFNlcnZpY2VzKClcbiAgICAgIC5zdWJzY3JpYmUoc2VydmljZXMgPT4ge1xuICAgICAgICB0aGlzLnN3YWdnZXJTZXJ2aWNlc1N0b3JlLm5leHQoc2VydmljZXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkNvbGxhcHNlQ29tcG9uZW50cygpIHtcbiAgICB0aGlzLmNvbGxhcHNlQ29tcG9uZW50cyA9ICF0aGlzLmNvbGxhcHNlQ29tcG9uZW50cztcbiAgfVxuXG4gIG9uQ29sbGFwc2VQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuY29sbGFwc2VQcm9wZXJ0aWVzID0gIXRoaXMuY29sbGFwc2VQcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2VsZWN0RGV2aWNlKGRldmljZSkge1xuICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSBkZXZpY2U7XG4gIH1cblxuICBjaGFuZ2VMYXlvdXQobGFuZHNjYXBlTW9kZSkge1xuICAgIHRoaXMubGFuZHNjYXBlTW9kZSA9IGxhbmRzY2FwZU1vZGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVubG9hZE1vZHVsZVNlcnZpY2UudW5sb2FkTW9kdWxlcygpO1xuICAgIGlmICh0aGlzLnN3YWdnZXJTZXJ2aWNlcyQpIHtcbiAgICAgIHRoaXMuc3dhZ2dlclNlcnZpY2VzJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tUb1ByZXZpZXcoKSB7XG4gICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmRpc2FibGVVY1BvbGljeU1vZGUoKTtcbiAgfVxufVxuIl19