/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService, Dialog } from '../../../../../core';
export class FeatureUpdatorComponent extends Dialog {
    /**
     * @param {?} dialogService
     * @param {?} screensLibrairiesManagement
     * @param {?} modelsManagementStore
     */
    constructor(dialogService, screensLibrairiesManagement, modelsManagementStore) {
        super();
        this.dialogService = dialogService;
        this.screensLibrairiesManagement = screensLibrairiesManagement;
        this.modelsManagementStore = modelsManagementStore;
        this.title = '';
        this.screensCount$ = {};
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.featureName = options.featureName;
        this.title = `Screen manager (Feature: ${this.featureName})`;
        //this.refreshFeatureScreensState(this.featureName);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /* this.templates$ = this.screensLibrairiesManagement
           .select(getAllScreens)
           .pipe(
             filter(Boolean),
             tap((screensTemplates: ScreenTemplate[]) => {
               screensTemplates.reduce((result, screenTemplate) => {
                 result[`${screenTemplate.template}`] = this.featuresManagement
                   .select(getScreensToDisplayByType, {
                     featureName: this.featureName,
                     template: screenTemplate.template
                   })
                   .pipe(
                     map(screens => `${screenTemplate.name} (${screens.length})`)
                   );
                 return result;
               }, this.screensCount$);
             })
           );
         this.models$ = this.modelsManagementStore.select(getAllModels).pipe(
           map(models =>
             models.map(model => {
               return { label: model.name, value: model.name };
             })
           )
         );*/
    }
    /* screenNameChanges(newName: string, index: any) {
        this.featuresManagement.dispatch(
          renameScreen({
            featureName: this.featureName,
            oldName:
              this.screens[index]['savedName'] || this.screens[index]['screenName'],
            newName
          })
        );
      }*/
    /* screenDefinitionChanges(
        screenName: string,
        savedName: string,
        modelName: string
      ) {
        this.featuresManagement.dispatch(
          changeScrrenModel({
            featureName: this.featureName,
            screenName,
            savedName,
            modelName
          })
        );
      }
    */
    /**
       * sections may have nested sections
       * @param screen the screen to delete
       */
    /* screenToDelete(screen) {
        this.featuresManagement.dispatch(
          deleteScreenFromFeature({
            featureName: this.featureName,
            screenName: screen.screenName
          })
        );
      }*/
    /**
       * sections may have nested sections
       * @param screen the screen to cancel
       */
    /* cancelDeleteScreen(screen) {
        this.featuresManagement.dispatch(
          cancelDeleteScreenFromFeature({
            featureName: this.featureName,
            screenName: screen.screenName
          })
        );
      }*/
    /**
       * sections may have nested sections
       * @param screenNode the screen node
       */
    /* confirmDeleteScreen(screen) {
        this.featuresManagement.dispatch(
          confirmDeleteScreenFromFeature({
            featureName: this.featureName,
            screenName: screen.screenName
          })
        );
      }*/
    /*addScreen(template: ScreenTemplate) {
        if (this.featureName) {
          this.featuresManagement.dispatch(
            addScreenToFeature({
              featureName: this.featureName,
              template
            })
          );
        }
      }*/
    /*apply() {
        this.featuresManagement.dispatch(
          applyFeatureUpdates({
            featureName: this.featureName
          })
        );
        this.dialogService.closeDialog();
      }*/
    /**
       * Add the 'invalid-screen-name' class name to cells having invalid input text
       * @param name the screen name
       * @param inputRef inputReference of the input text
       * @returns boolean
       */
    /*nameValidityStyle(index: number, inputRef: HTMLElement): boolean {
        const classameExist = includes(
          inputRef.parentElement.parentElement.className,
          'invalid-screen-name'
        );
        const isValid = !this.screens[index].errors;
        if (isValid !== undefined && !isValid) {
          if (!classameExist) {
            inputRef.parentElement.parentElement.className +=
              ' invalid-screen-name';
          }
          return isValid;
        } else {
          if (classameExist) {
            inputRef.parentElement.parentElement.className = inputRef.parentElement.parentElement.className.replace(
              'invalid-screen-name',
              ''
            );
          }
        }
        if (isValid !== undefined && isValid) {
          return isValid;
        }
        return !isValid;
      }*/
    /*nameValidityTooltip(index: number): string {
        return this.screens[index].errors;
      }*/
    /**
     * enabale or disable the Apply button
     * @return {?}
     */
    disableApplyButton() {
        // require screens validated
        return this.disableApplyButton$;
    }
}
FeatureUpdatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-feature-updator',
                template: "<!--<div class=\"templates-group\" *ngIf=\"templates$ | async as templates\">\n  <span class=\"title\">Screen types:</span>\n  <div class=\"ui-g-3\" *ngFor=\"let template of templates\">\n    <p-button [label]=\"screensCount$[template.template] | async\" (click)=\"addScreen(template)\"></p-button>\n  </div>\n</div>\n<span class=\"title\">Feature screens:</span>\n<ng-container *ngIf=\"featureScreensState$ | async\">\n  <div class=\"screens\">\n    <p-table [value]=\"screens\" [scrollable]=\"true\" scrollHeight=\"200px\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Template</th>\n          <th>Definition</th>\n          <th style=\"width:65px;text-align: center\">\n            <ng-container *ngIf=\"screensInTrashCount$ | async as screensInTrashCount\">\n              <span *ngIf=\"screensInTrashCount > 0\"><i\n                  class=\"fa fa-fw fa-trash\"></i><sup>({{ screensInTrashCount }})</sup></span></ng-container>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-screen let-ri=\"rowIndex\">\n        <tr>\n          <td pEditableColumn>\n            <p-cellEditor [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n              <ng-template pTemplate=\"input\">\n                <input type=\"text\" [ngModel]=\"screen.screenName\" (blur)=\"screenNameChanges($event.target.value, ri)\"\n                  (keydown.enter)=\"screenNameChanges($event.target.value, ri)\" [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\" />\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <span [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n                  {{ screen.screenName }} <i class=\"fas fa-pen edit-cell-icon\"></i></span>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td>{{ screen.template.template }}</td>\n          <td pEditableColumn>\n\n            <p-cellEditor>\n              <ng-template pTemplate=\"input\">\n                <p-dropdown [options]=\"models$ | async\"\n                  [(ngModel)]=\"screen.modelChanged ? screen.modelChangedValue : screen.modelName\" filter=\"true\"\n                  filterPlaceholder=\"Search model\" placeholder=\"Select model\" showClear=\"true\"\n                  (onChange)=\"screenDefinitionChanges(screen.screenName,screen.savedName,$event.value)\" appendTo=\"body\"\n                  panelStyleClass=\"sc-ui-dropdown\"></p-dropdown>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{screen.modelChanged ? screen.modelChangedValue : screen.modelName}} <i\n                  class=\"fas fa-pen edit-cell-icon\"></i>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td style=\"width: 65px;text-align: center;\">\n            <p-button *ngIf=\"!screen.toBeDeleted\" class=\"delete-button\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n              tooltipPosition=\"bottom\" (click)=\"screenToDelete(screen)\"></p-button>\n            <div class=\"actions\" *ngIf=\"screen.toBeDeleted\">\n              <p-button class=\"save-button\" icon=\"fa fa-fw fa-check\" pTooltip=\"Confirm\" tooltipPosition=\"bottom\"\n                (click)=\"confirmDeleteScreen(screen)\"></p-button>\n              <p-button class=\"add-Feature\" icon=\"fa fa-fw fa-close\" pTooltip=\"Cancel\" tooltipPosition=\"bottom\"\n                (click)=\"cancelDeleteScreen(screen)\"></p-button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns=\"columns\">\n        <tr>\n          <td [attr.colspan]=\"columns?.length\">\n            No screen configured\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"apply-button\">\n    <p-button (onClick)=\"apply()\" icon=\"fa fa-fw fa-check\" label=\"Apply\" [disabled]=\"disableApplyButton() | async\">\n    </p-button>\n  </div>\n</ng-container>-->\n",
                styles: [".title{display:block;font-weight:700;font-size:16px}:host ::ng-deep .apply-button .ui-button,:host ::ng-deep .apply-button .ui-button:hover{background:#eee;color:#5cb85c;float:right;height:35px}:host ::ng-deep .apply-button{float:right;margin-top:20px}:host ::ng-deep .delete-button .ui-button,:host ::ng-deep .delete-button .ui-button:hover{background:0 0;color:#d84315}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-table .edit-cell-icon{font-size:14px}:host ::ng-deep .ui-table .ui-widget-header{background-color:transparent;width:100%}:host ::ng-deep .ui-table .ui-table-thead>tr>th{padding:5px;border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4;border-bottom:none;font-size:14px}:host ::ng-deep .ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}:host ::ng-deep .ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8;padding:2px 5px}:host ::ng-deep .templates-group{display:inline-block;margin-bottom:5px}:host ::ng-deep .templates-group .ui-g-3{padding:3px}:host ::ng-deep .templates-group .ui-button{color:#d83431;background:#eee;width:175px;height:30px}:host ::ng-deep .templates-group .ui-button:hover{background-color:#e0e0e0;color:#dc3545;width:175px}:host ::ng-deep .ui-widget-header{background:repeat-x #ececec}:host ::ng-deep .ui-editable-column .invalid-screen-name{background:#db7093;border:0}:host ::ng-deep .ui-table .ui-table-data>tr>td.ui-editable-column.invalid-screen-name{background:#db7093}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .actions .ui-button{border:none;border-radius:0;height:25px;width:25px;margin-right:0;margin-left:2px}:host ::ng-deep .actions .add-Feature .ui-button{color:#d83431;background:0 0}:host ::ng-deep .actions .save-button .ui-button{color:#4caf50;background:0 0}.actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions{display:-webkit-inline-box;display:inline-flex}.filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}"]
            }] }
];
/** @nocollapse */
FeatureUpdatorComponent.ctorParameters = () => [
    { type: DialogService },
    { type: Store },
    { type: Store }
];
FeatureUpdatorComponent.propDecorators = {
    setOptions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FeatureUpdatorComponent.prototype.featureName;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.featureScreensState$;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.screensInTrashCount$;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.disableApplyButton$;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.templates$;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.models$;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.title;
    /** @type {?} */
    FeatureUpdatorComponent.prototype.screensCount$;
    /**
     * @type {?}
     * @private
     */
    FeatureUpdatorComponent.prototype.dialogService;
    /**
     * @type {?}
     * @private
     */
    FeatureUpdatorComponent.prototype.screensLibrairiesManagement;
    /**
     * @type {?}
     * @private
     */
    FeatureUpdatorComponent.prototype.modelsManagementStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLXVwZGF0b3IvZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBYzVELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxNQUFNOzs7Ozs7SUFtQmpELFlBQ1UsYUFBNEIsRUFDNUIsMkJBQTBELEVBQzFELHFCQUF5QztRQUdqRCxLQUFLLEVBQUUsQ0FBQztRQUxBLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBK0I7UUFDMUQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFvQjtRQWRuRCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsa0JBQWEsR0FBMEMsRUFBRSxDQUFDO0lBZ0IxRCxDQUFDOzs7OztJQWJELFVBQVUsQ0FBQyxPQUFnQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBNEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO1FBQzdELG9EQUFvRDtJQUN0RCxDQUFDOzs7O0lBV0QsUUFBUTtRQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUF3Qks7SUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNEhELGtCQUFrQjtRQUNoQiw0QkFBNEI7UUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7O1lBMUxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwrcElBQStDOzthQUVoRDs7OztZQWJRLGFBQWE7WUFMYixLQUFLO1lBQUwsS0FBSzs7O3lCQStCWCxLQUFLOzs7O0lBWE4sOENBQW9COztJQUNwQix1REFBc0M7O0lBQ3RDLHVEQUF5Qzs7SUFDekMsc0RBQXlDOztJQUN6Qyw2Q0FBeUM7O0lBRXpDLDBDQUEyQjs7SUFDM0Isd0NBQVc7O0lBRVgsZ0RBQTBEOzs7OztJQVV4RCxnREFBb0M7Ozs7O0lBQ3BDLDhEQUFrRTs7Ozs7SUFDbEUsd0RBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaW5jbHVkZXMgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlLCBEaWFsb2cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlJztcbmltcG9ydCB7IFNjcmVlblRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL3NjcmVlbnMtbGlicmFyeSc7XG5pbXBvcnQge1xuICBTY3JlZW5zTGlicmFpcmllc1N0YXRlLFxuICBnZXRBbGxTY3JlZW5zXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvbmdyeC9zY3JlZW5zLWxpYnJhaXJpZXMnO1xuXG5cbmltcG9ydCB7IGdldEFsbE1vZGVscywgTW9kZWxzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL25ncngvbW9kZWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLWZlYXR1cmUtdXBkYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlLXVwZGF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlLXVwZGF0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlVXBkYXRvckNvbXBvbmVudCBleHRlbmRzIERpYWxvZyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZlYXR1cmVOYW1lOiBzdHJpbmc7XG4gIGZlYXR1cmVTY3JlZW5zU3RhdGUkOiBPYnNlcnZhYmxlPGFueT47XG4gIHNjcmVlbnNJblRyYXNoQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGRpc2FibGVBcHBseUJ1dHRvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHRlbXBsYXRlcyQ6IE9ic2VydmFibGU8U2NyZWVuVGVtcGxhdGVbXT47XG4gIC8vIHNjcmVlbnM6IFNjcmVlblN0YXRlW107XG4gIG1vZGVscyQ6IE9ic2VydmFibGU8YW55W10+O1xuICB0aXRsZSA9ICcnO1xuXG4gIHNjcmVlbnNDb3VudCQ6IHsgW2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxzdHJpbmc+IH0gPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXRPcHRpb25zKG9wdGlvbnM6IHsgZmVhdHVyZU5hbWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5mZWF0dXJlTmFtZSA9IG9wdGlvbnMuZmVhdHVyZU5hbWU7XG4gICAgdGhpcy50aXRsZSA9IGBTY3JlZW4gbWFuYWdlciAoRmVhdHVyZTogJHt0aGlzLmZlYXR1cmVOYW1lfSlgO1xuICAgIC8vdGhpcy5yZWZyZXNoRmVhdHVyZVNjcmVlbnNTdGF0ZSh0aGlzLmZlYXR1cmVOYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHNjcmVlbnNMaWJyYWlyaWVzTWFuYWdlbWVudDogU3RvcmU8U2NyZWVuc0xpYnJhaXJpZXNTdGF0ZT4sXG4gICAgcHJpdmF0ZSBtb2RlbHNNYW5hZ2VtZW50U3RvcmU6IFN0b3JlPE1vZGVsc1N0YXRlPixcbiAgICAvLyBwcml2YXRlIGZlYXR1cmVzTWFuYWdlbWVudDogU3RvcmU8RmVhdHVyZXNTdGF0ZT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgLyogdGhpcy50ZW1wbGF0ZXMkID0gdGhpcy5zY3JlZW5zTGlicmFpcmllc01hbmFnZW1lbnRcbiAgICAgIC5zZWxlY3QoZ2V0QWxsU2NyZWVucylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIHRhcCgoc2NyZWVuc1RlbXBsYXRlczogU2NyZWVuVGVtcGxhdGVbXSkgPT4ge1xuICAgICAgICAgIHNjcmVlbnNUZW1wbGF0ZXMucmVkdWNlKChyZXN1bHQsIHNjcmVlblRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbYCR7c2NyZWVuVGVtcGxhdGUudGVtcGxhdGV9YF0gPSB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudFxuICAgICAgICAgICAgICAuc2VsZWN0KGdldFNjcmVlbnNUb0Rpc3BsYXlCeVR5cGUsIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogc2NyZWVuVGVtcGxhdGUudGVtcGxhdGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHNjcmVlbnMgPT4gYCR7c2NyZWVuVGVtcGxhdGUubmFtZX0gKCR7c2NyZWVucy5sZW5ndGh9KWApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0sIHRoaXMuc2NyZWVuc0NvdW50JCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIHRoaXMubW9kZWxzJCA9IHRoaXMubW9kZWxzTWFuYWdlbWVudFN0b3JlLnNlbGVjdChnZXRBbGxNb2RlbHMpLnBpcGUoXG4gICAgICBtYXAobW9kZWxzID0+XG4gICAgICAgIG1vZGVscy5tYXAobW9kZWwgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBtb2RlbC5uYW1lLCB2YWx1ZTogbW9kZWwubmFtZSB9O1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7Ki9cbiAgfVxuXG4gLyogc2NyZWVuTmFtZUNoYW5nZXMobmV3TmFtZTogc3RyaW5nLCBpbmRleDogYW55KSB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICByZW5hbWVTY3JlZW4oe1xuICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgb2xkTmFtZTpcbiAgICAgICAgICB0aGlzLnNjcmVlbnNbaW5kZXhdWydzYXZlZE5hbWUnXSB8fCB0aGlzLnNjcmVlbnNbaW5kZXhdWydzY3JlZW5OYW1lJ10sXG4gICAgICAgIG5ld05hbWVcbiAgICAgIH0pXG4gICAgKTtcbiAgfSovXG5cbiAvKiBzY3JlZW5EZWZpbml0aW9uQ2hhbmdlcyhcbiAgICBzY3JlZW5OYW1lOiBzdHJpbmcsXG4gICAgc2F2ZWROYW1lOiBzdHJpbmcsXG4gICAgbW9kZWxOYW1lOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICBjaGFuZ2VTY3JyZW5Nb2RlbCh7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lLFxuICAgICAgICBzY3JlZW5OYW1lLFxuICAgICAgICBzYXZlZE5hbWUsXG4gICAgICAgIG1vZGVsTmFtZVxuICAgICAgfSlcbiAgICApO1xuICB9XG4qL1xuICAvKipcbiAgICogc2VjdGlvbnMgbWF5IGhhdmUgbmVzdGVkIHNlY3Rpb25zXG4gICAqIEBwYXJhbSBzY3JlZW4gdGhlIHNjcmVlbiB0byBkZWxldGVcbiAgICovXG4gLyogc2NyZWVuVG9EZWxldGUoc2NyZWVuKSB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICBkZWxldGVTY3JlZW5Gcm9tRmVhdHVyZSh7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lLFxuICAgICAgICBzY3JlZW5OYW1lOiBzY3JlZW4uc2NyZWVuTmFtZVxuICAgICAgfSlcbiAgICApO1xuICB9Ki9cbiAgLyoqXG4gICAqIHNlY3Rpb25zIG1heSBoYXZlIG5lc3RlZCBzZWN0aW9uc1xuICAgKiBAcGFyYW0gc2NyZWVuIHRoZSBzY3JlZW4gdG8gY2FuY2VsXG4gICAqL1xuIC8qIGNhbmNlbERlbGV0ZVNjcmVlbihzY3JlZW4pIHtcbiAgICB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgIGNhbmNlbERlbGV0ZVNjcmVlbkZyb21GZWF0dXJlKHtcbiAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWUsXG4gICAgICAgIHNjcmVlbk5hbWU6IHNjcmVlbi5zY3JlZW5OYW1lXG4gICAgICB9KVxuICAgICk7XG4gIH0qL1xuICAvKipcbiAgICogc2VjdGlvbnMgbWF5IGhhdmUgbmVzdGVkIHNlY3Rpb25zXG4gICAqIEBwYXJhbSBzY3JlZW5Ob2RlIHRoZSBzY3JlZW4gbm9kZVxuICAgKi9cbiAvKiBjb25maXJtRGVsZXRlU2NyZWVuKHNjcmVlbikge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgY29uZmlybURlbGV0ZVNjcmVlbkZyb21GZWF0dXJlKHtcbiAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWUsXG4gICAgICAgIHNjcmVlbk5hbWU6IHNjcmVlbi5zY3JlZW5OYW1lXG4gICAgICB9KVxuICAgICk7XG4gIH0qL1xuXG4gIC8qYWRkU2NyZWVuKHRlbXBsYXRlOiBTY3JlZW5UZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLmZlYXR1cmVOYW1lKSB7XG4gICAgICB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgICAgYWRkU2NyZWVuVG9GZWF0dXJlKHtcbiAgICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0qL1xuXG4gIC8qYXBwbHkoKSB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICBhcHBseUZlYXR1cmVVcGRhdGVzKHtcbiAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWVcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuY2xvc2VEaWFsb2coKTtcbiAgfSovXG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgJ2ludmFsaWQtc2NyZWVuLW5hbWUnIGNsYXNzIG5hbWUgdG8gY2VsbHMgaGF2aW5nIGludmFsaWQgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0gbmFtZSB0aGUgc2NyZWVuIG5hbWVcbiAgICogQHBhcmFtIGlucHV0UmVmIGlucHV0UmVmZXJlbmNlIG9mIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIC8qbmFtZVZhbGlkaXR5U3R5bGUoaW5kZXg6IG51bWJlciwgaW5wdXRSZWY6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2xhc3NhbWVFeGlzdCA9IGluY2x1ZGVzKFxuICAgICAgaW5wdXRSZWYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSxcbiAgICAgICdpbnZhbGlkLXNjcmVlbi1uYW1lJ1xuICAgICk7XG4gICAgY29uc3QgaXNWYWxpZCA9ICF0aGlzLnNjcmVlbnNbaW5kZXhdLmVycm9ycztcbiAgICBpZiAoaXNWYWxpZCAhPT0gdW5kZWZpbmVkICYmICFpc1ZhbGlkKSB7XG4gICAgICBpZiAoIWNsYXNzYW1lRXhpc3QpIHtcbiAgICAgICAgaW5wdXRSZWYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPVxuICAgICAgICAgICcgaW52YWxpZC1zY3JlZW4tbmFtZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNsYXNzYW1lRXhpc3QpIHtcbiAgICAgICAgaW5wdXRSZWYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IGlucHV0UmVmLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAnaW52YWxpZC1zY3JlZW4tbmFtZScsXG4gICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzVmFsaWQgIT09IHVuZGVmaW5lZCAmJiBpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgcmV0dXJuICFpc1ZhbGlkO1xuICB9Ki9cblxuICAvKm5hbWVWYWxpZGl0eVRvb2x0aXAoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2NyZWVuc1tpbmRleF0uZXJyb3JzO1xuICB9Ki9cblxuICAvKipcbiAgICogZW5hYmFsZSBvciBkaXNhYmxlIHRoZSBBcHBseSBidXR0b25cbiAgICovXG4gIGRpc2FibGVBcHBseUJ1dHRvbigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyByZXF1aXJlIHNjcmVlbnMgdmFsaWRhdGVkXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZUFwcGx5QnV0dG9uJDtcbiAgfVxuXG4gIC8qcHJpdmF0ZSByZWZyZXNoRmVhdHVyZVNjcmVlbnNTdGF0ZShmZWF0dXJlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5mZWF0dXJlU2NyZWVuc1N0YXRlJCA9IHRoaXMuZ2V0RmVhdHVyZVN0YXRlKGZlYXR1cmVOYW1lKS5waXBlKFxuICAgICAgbWFwKChzY3JlZW5zU3RhdGVzOiBTY3JlZW5TdGF0ZVtdKSA9PlxuICAgICAgICBzY3JlZW5zU3RhdGVzLmZpbHRlcihcbiAgICAgICAgICAoc2NyZWVuU3RhdGU6IFNjcmVlblN0YXRlKSA9PlxuICAgICAgICAgICAgIXNjcmVlblN0YXRlLnRvQmVJblRyYXNoICYmICFzY3JlZW5TdGF0ZS5pblRyYXNoXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB0YXAoc2NyZWVuc1N0YXRlID0+IHtcbiAgICAgICAgdGhpcy5zY3JlZW5zID0gc2NyZWVuc1N0YXRlO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZGlzYWJsZUFwcGx5QnV0dG9uJCA9IHRoaXMuZ2V0RmVhdHVyZVN0YXRlKGZlYXR1cmVOYW1lKS5waXBlKFxuICAgICAgbWFwKHNjcmVlbnNTdGF0ZSA9PlxuICAgICAgICBzY3JlZW5zU3RhdGUuZXZlcnkoXG4gICAgICAgICAgKHNjcmVlblN0YXRlOiBTY3JlZW5TdGF0ZSkgPT5cbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS50b0JlQWRkZWQgJiZcbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS5pc0luVmFsaWQgJiZcbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS50b0JlSW5UcmFzaCAmJlxuICAgICAgICAgICAgIXNjcmVlblN0YXRlLmluVHJhc2ggJiZcbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS5yZW5hbWUgJiZcbiAgICAgICAgICAgIHNjcmVlblN0YXRlLm1vZGVsQ2hhbmdlZFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLnNjcmVlbnNJblRyYXNoQ291bnQkID0gdGhpcy5nZXRGZWF0dXJlU3RhdGUoZmVhdHVyZU5hbWUpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChzY3JlZW5zU3RhdGVzOiBTY3JlZW5TdGF0ZVtdKSA9PlxuICAgICAgICAgIHNjcmVlbnNTdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgICAgKHNjcmVlblN0YXRlOiBTY3JlZW5TdGF0ZSkgPT5cbiAgICAgICAgICAgICAgc2NyZWVuU3RhdGUudG9CZUluVHJhc2ggfHwgc2NyZWVuU3RhdGUuaW5UcmFzaFxuICAgICAgICAgICkubGVuZ3RoXG4gICAgICApXG4gICAgKTtcbiAgfSovXG4gLyogcHJpdmF0ZSBnZXRGZWF0dXJlU3RhdGUoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlc01hbmFnZW1lbnRcbiAgICAgIC5zZWxlY3QoZ2V0U2NyZWVuc1N0YXRlLCB7XG4gICAgICAgIGZlYXR1cmVOYW1lXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzY3JlZW5zU3RhdGUgPT4ge1xuICAgICAgICAgIGlmIChzY3JlZW5zU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzY3JlZW5zU3RhdGUpLm1hcChrZXkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uc2NyZWVuc1N0YXRlW2tleV0sXG4gICAgICAgICAgICAgIHNjcmVlbk5hbWU6IHNjcmVlbnNTdGF0ZVtrZXldLnJlbmFtZSB8fCBrZXlcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfSovXG59XG4iXX0=