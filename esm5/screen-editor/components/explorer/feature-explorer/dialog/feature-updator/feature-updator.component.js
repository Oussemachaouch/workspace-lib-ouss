/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService, Dialog } from '../../../../../core';
var FeatureUpdatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FeatureUpdatorComponent, _super);
    function FeatureUpdatorComponent(dialogService, screensLibrairiesManagement, modelsManagementStore) {
        var _this = _super.call(this) || this;
        _this.dialogService = dialogService;
        _this.screensLibrairiesManagement = screensLibrairiesManagement;
        _this.modelsManagementStore = modelsManagementStore;
        _this.title = '';
        _this.screensCount$ = {};
        return _this;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FeatureUpdatorComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.featureName = options.featureName;
        this.title = "Screen manager (Feature: " + this.featureName + ")";
        //this.refreshFeatureScreensState(this.featureName);
    };
    /**
     * @return {?}
     */
    FeatureUpdatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
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
     */
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
    FeatureUpdatorComponent.prototype.disableApplyButton = /* screenNameChanges(newName: string, index: any) {
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
    function () {
        // require screens validated
        return this.disableApplyButton$;
    };
    FeatureUpdatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-feature-updator',
                    template: "<!--<div class=\"templates-group\" *ngIf=\"templates$ | async as templates\">\n  <span class=\"title\">Screen types:</span>\n  <div class=\"ui-g-3\" *ngFor=\"let template of templates\">\n    <p-button [label]=\"screensCount$[template.template] | async\" (click)=\"addScreen(template)\"></p-button>\n  </div>\n</div>\n<span class=\"title\">Feature screens:</span>\n<ng-container *ngIf=\"featureScreensState$ | async\">\n  <div class=\"screens\">\n    <p-table [value]=\"screens\" [scrollable]=\"true\" scrollHeight=\"200px\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Template</th>\n          <th>Definition</th>\n          <th style=\"width:65px;text-align: center\">\n            <ng-container *ngIf=\"screensInTrashCount$ | async as screensInTrashCount\">\n              <span *ngIf=\"screensInTrashCount > 0\"><i\n                  class=\"fa fa-fw fa-trash\"></i><sup>({{ screensInTrashCount }})</sup></span></ng-container>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-screen let-ri=\"rowIndex\">\n        <tr>\n          <td pEditableColumn>\n            <p-cellEditor [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n              <ng-template pTemplate=\"input\">\n                <input type=\"text\" [ngModel]=\"screen.screenName\" (blur)=\"screenNameChanges($event.target.value, ri)\"\n                  (keydown.enter)=\"screenNameChanges($event.target.value, ri)\" [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\" />\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <span [pTooltip]=\"screen.errors\" [ngClass]=\"{\n                    'invalid-screen-name': screen.errors\n                  }\">\n                  {{ screen.screenName }} <i class=\"fas fa-pen edit-cell-icon\"></i></span>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td>{{ screen.template.template }}</td>\n          <td pEditableColumn>\n\n            <p-cellEditor>\n              <ng-template pTemplate=\"input\">\n                <p-dropdown [options]=\"models$ | async\"\n                  [(ngModel)]=\"screen.modelChanged ? screen.modelChangedValue : screen.modelName\" filter=\"true\"\n                  filterPlaceholder=\"Search model\" placeholder=\"Select model\" showClear=\"true\"\n                  (onChange)=\"screenDefinitionChanges(screen.screenName,screen.savedName,$event.value)\" appendTo=\"body\"\n                  panelStyleClass=\"sc-ui-dropdown\"></p-dropdown>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{screen.modelChanged ? screen.modelChangedValue : screen.modelName}} <i\n                  class=\"fas fa-pen edit-cell-icon\"></i>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td style=\"width: 65px;text-align: center;\">\n            <p-button *ngIf=\"!screen.toBeDeleted\" class=\"delete-button\" icon=\"fa fa-fw fa-trash\" pTooltip=\"Delete\"\n              tooltipPosition=\"bottom\" (click)=\"screenToDelete(screen)\"></p-button>\n            <div class=\"actions\" *ngIf=\"screen.toBeDeleted\">\n              <p-button class=\"save-button\" icon=\"fa fa-fw fa-check\" pTooltip=\"Confirm\" tooltipPosition=\"bottom\"\n                (click)=\"confirmDeleteScreen(screen)\"></p-button>\n              <p-button class=\"add-Feature\" icon=\"fa fa-fw fa-close\" pTooltip=\"Cancel\" tooltipPosition=\"bottom\"\n                (click)=\"cancelDeleteScreen(screen)\"></p-button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"emptymessage\" let-columns=\"columns\">\n        <tr>\n          <td [attr.colspan]=\"columns?.length\">\n            No screen configured\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"apply-button\">\n    <p-button (onClick)=\"apply()\" icon=\"fa fa-fw fa-check\" label=\"Apply\" [disabled]=\"disableApplyButton() | async\">\n    </p-button>\n  </div>\n</ng-container>-->\n",
                    styles: [".title{display:block;font-weight:700;font-size:16px}:host ::ng-deep .apply-button .ui-button,:host ::ng-deep .apply-button .ui-button:hover{background:#eee;color:#5cb85c;float:right;height:35px}:host ::ng-deep .apply-button{float:right;margin-top:20px}:host ::ng-deep .delete-button .ui-button,:host ::ng-deep .delete-button .ui-button:hover{background:0 0;color:#d84315}:host ::ng-deep .ui-button:enabled:focus{box-shadow:none}:host ::ng-deep .ui-table .edit-cell-icon{font-size:14px}:host ::ng-deep .ui-table .ui-widget-header{background-color:transparent;width:100%}:host ::ng-deep .ui-table .ui-table-thead>tr>th{padding:5px;border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4;border-bottom:none;font-size:14px}:host ::ng-deep .ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}:host ::ng-deep .ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8;padding:2px 5px}:host ::ng-deep .templates-group{display:inline-block;margin-bottom:5px}:host ::ng-deep .templates-group .ui-g-3{padding:3px}:host ::ng-deep .templates-group .ui-button{color:#d83431;background:#eee;width:175px;height:30px}:host ::ng-deep .templates-group .ui-button:hover{background-color:#e0e0e0;color:#dc3545;width:175px}:host ::ng-deep .ui-widget-header{background:repeat-x #ececec}:host ::ng-deep .ui-editable-column .invalid-screen-name{background:#db7093;border:0}:host ::ng-deep .ui-table .ui-table-data>tr>td.ui-editable-column.invalid-screen-name{background:#db7093}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputgroup-addon,:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext{border:none;border-bottom:2px solid #8d9293;border-radius:0;padding:0;height:25px;color:#313439;font-size:14px;background:0 0}:host ::ng-deep .filter-input.ui-inputgroup .ui-inputtext:focus{box-shadow:none}:host ::ng-deep .actions .ui-button{border:none;border-radius:0;height:25px;width:25px;margin-right:0;margin-left:2px}:host ::ng-deep .actions .add-Feature .ui-button{color:#d83431;background:0 0}:host ::ng-deep .actions .save-button .ui-button{color:#4caf50;background:0 0}.actions-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.actions{display:-webkit-inline-box;display:inline-flex}.filter-input{padding-right:5px}.filter-input input,.ui-inputgroup{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    FeatureUpdatorComponent.ctorParameters = function () { return [
        { type: DialogService },
        { type: Store },
        { type: Store }
    ]; };
    FeatureUpdatorComponent.propDecorators = {
        setOptions: [{ type: Input }]
    };
    return FeatureUpdatorComponent;
}(Dialog));
export { FeatureUpdatorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29tcG9uZW50cy9leHBsb3Jlci9mZWF0dXJlLWV4cGxvcmVyL2RpYWxvZy9mZWF0dXJlLXVwZGF0b3IvZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVM1RDtJQUs2QyxtREFBTTtJQW1CakQsaUNBQ1UsYUFBNEIsRUFDNUIsMkJBQTBELEVBQzFELHFCQUF5QztRQUhuRCxZQU1FLGlCQUFPLFNBQ1I7UUFOUyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQ0FBMkIsR0FBM0IsMkJBQTJCLENBQStCO1FBQzFELDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBb0I7UUFkbkQsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLG1CQUFhLEdBQTBDLEVBQUUsQ0FBQzs7SUFnQjFELENBQUM7Ozs7O0lBYkQsNENBQVU7Ozs7SUFEVixVQUNXLE9BQWdDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLDhCQUE0QixJQUFJLENBQUMsV0FBVyxNQUFHLENBQUM7UUFDN0Qsb0RBQW9EO0lBQ3RELENBQUM7Ozs7SUFXRCwwQ0FBUTs7O0lBQVI7UUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBd0JLO0lBQ04sQ0FBQztJQUVGOzs7Ozs7Ozs7UUFTSTtJQUVKOzs7Ozs7Ozs7Ozs7OztLQWNDO0lBQ0E7OztPQUdHO0lBQ0o7Ozs7Ozs7UUFPSTtJQUNIOzs7T0FHRztJQUNKOzs7Ozs7O1FBT0k7SUFDSDs7O09BR0c7SUFDSjs7Ozs7OztRQU9JO0lBRUg7Ozs7Ozs7OztPQVNHO0lBRUg7Ozs7Ozs7T0FPRztJQUVIOzs7OztPQUtHO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUVIOztPQUVHO0lBRUg7O09BRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCxvREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFsQjtRQUNFLDRCQUE0QjtRQUM1QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOztnQkExTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLCtwSUFBK0M7O2lCQUVoRDs7OztnQkFiUSxhQUFhO2dCQUxiLEtBQUs7Z0JBQUwsS0FBSzs7OzZCQStCWCxLQUFLOztJQStOUiw4QkFBQztDQUFBLEFBaFBELENBSzZDLE1BQU0sR0EyT2xEO1NBM09ZLHVCQUF1Qjs7O0lBQ2xDLDhDQUFvQjs7SUFDcEIsdURBQXNDOztJQUN0Qyx1REFBeUM7O0lBQ3pDLHNEQUF5Qzs7SUFDekMsNkNBQXlDOztJQUV6QywwQ0FBMkI7O0lBQzNCLHdDQUFXOztJQUVYLGdEQUEwRDs7Ozs7SUFVeEQsZ0RBQW9DOzs7OztJQUNwQyw4REFBa0U7Ozs7O0lBQ2xFLHdEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBTY3JlZW5UZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9zY3JlZW5zLWxpYnJhcnknO1xuaW1wb3J0IHtcbiAgU2NyZWVuc0xpYnJhaXJpZXNTdGF0ZSxcbiAgZ2V0QWxsU2NyZWVuc1xufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL25ncngvc2NyZWVucy1saWJyYWlyaWVzJztcblxuXG5pbXBvcnQgeyBnZXRBbGxNb2RlbHMsIE1vZGVsc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9uZ3J4L21vZGVscyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1mZWF0dXJlLXVwZGF0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS11cGRhdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVVwZGF0b3JDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2cgaW1wbGVtZW50cyBPbkluaXQge1xuICBmZWF0dXJlTmFtZTogc3RyaW5nO1xuICBmZWF0dXJlU2NyZWVuc1N0YXRlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBzY3JlZW5zSW5UcmFzaENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBkaXNhYmxlQXBwbHlCdXR0b24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPFNjcmVlblRlbXBsYXRlW10+O1xuICAvLyBzY3JlZW5zOiBTY3JlZW5TdGF0ZVtdO1xuICBtb2RlbHMkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgdGl0bGUgPSAnJztcblxuICBzY3JlZW5zQ291bnQkOiB7IFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8c3RyaW5nPiB9ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiB7IGZlYXR1cmVOYW1lOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMuZmVhdHVyZU5hbWUgPSBvcHRpb25zLmZlYXR1cmVOYW1lO1xuICAgIHRoaXMudGl0bGUgPSBgU2NyZWVuIG1hbmFnZXIgKEZlYXR1cmU6ICR7dGhpcy5mZWF0dXJlTmFtZX0pYDtcbiAgICAvL3RoaXMucmVmcmVzaEZlYXR1cmVTY3JlZW5zU3RhdGUodGhpcy5mZWF0dXJlTmFtZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JlZW5zTGlicmFpcmllc01hbmFnZW1lbnQ6IFN0b3JlPFNjcmVlbnNMaWJyYWlyaWVzU3RhdGU+LFxuICAgIHByaXZhdGUgbW9kZWxzTWFuYWdlbWVudFN0b3JlOiBTdG9yZTxNb2RlbHNTdGF0ZT4sXG4gICAgLy8gcHJpdmF0ZSBmZWF0dXJlc01hbmFnZW1lbnQ6IFN0b3JlPEZlYXR1cmVzU3RhdGU+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgIC8qIHRoaXMudGVtcGxhdGVzJCA9IHRoaXMuc2NyZWVuc0xpYnJhaXJpZXNNYW5hZ2VtZW50XG4gICAgICAuc2VsZWN0KGdldEFsbFNjcmVlbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICB0YXAoKHNjcmVlbnNUZW1wbGF0ZXM6IFNjcmVlblRlbXBsYXRlW10pID0+IHtcbiAgICAgICAgICBzY3JlZW5zVGVtcGxhdGVzLnJlZHVjZSgocmVzdWx0LCBzY3JlZW5UZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2Ake3NjcmVlblRlbXBsYXRlLnRlbXBsYXRlfWBdID0gdGhpcy5mZWF0dXJlc01hbmFnZW1lbnRcbiAgICAgICAgICAgICAgLnNlbGVjdChnZXRTY3JlZW5zVG9EaXNwbGF5QnlUeXBlLCB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHNjcmVlblRlbXBsYXRlLnRlbXBsYXRlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChzY3JlZW5zID0+IGAke3NjcmVlblRlbXBsYXRlLm5hbWV9ICgke3NjcmVlbnMubGVuZ3RofSlgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9LCB0aGlzLnNjcmVlbnNDb3VudCQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB0aGlzLm1vZGVscyQgPSB0aGlzLm1vZGVsc01hbmFnZW1lbnRTdG9yZS5zZWxlY3QoZ2V0QWxsTW9kZWxzKS5waXBlKFxuICAgICAgbWFwKG1vZGVscyA9PlxuICAgICAgICBtb2RlbHMubWFwKG1vZGVsID0+IHtcbiAgICAgICAgICByZXR1cm4geyBsYWJlbDogbW9kZWwubmFtZSwgdmFsdWU6IG1vZGVsLm5hbWUgfTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApOyovXG4gIH1cblxuIC8qIHNjcmVlbk5hbWVDaGFuZ2VzKG5ld05hbWU6IHN0cmluZywgaW5kZXg6IGFueSkge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgcmVuYW1lU2NyZWVuKHtcbiAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWUsXG4gICAgICAgIG9sZE5hbWU6XG4gICAgICAgICAgdGhpcy5zY3JlZW5zW2luZGV4XVsnc2F2ZWROYW1lJ10gfHwgdGhpcy5zY3JlZW5zW2luZGV4XVsnc2NyZWVuTmFtZSddLFxuICAgICAgICBuZXdOYW1lXG4gICAgICB9KVxuICAgICk7XG4gIH0qL1xuXG4gLyogc2NyZWVuRGVmaW5pdGlvbkNoYW5nZXMoXG4gICAgc2NyZWVuTmFtZTogc3RyaW5nLFxuICAgIHNhdmVkTmFtZTogc3RyaW5nLFxuICAgIG1vZGVsTmFtZTogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgY2hhbmdlU2NycmVuTW9kZWwoe1xuICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgc2NyZWVuTmFtZSxcbiAgICAgICAgc2F2ZWROYW1lLFxuICAgICAgICBtb2RlbE5hbWVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuKi9cbiAgLyoqXG4gICAqIHNlY3Rpb25zIG1heSBoYXZlIG5lc3RlZCBzZWN0aW9uc1xuICAgKiBAcGFyYW0gc2NyZWVuIHRoZSBzY3JlZW4gdG8gZGVsZXRlXG4gICAqL1xuIC8qIHNjcmVlblRvRGVsZXRlKHNjcmVlbikge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgZGVsZXRlU2NyZWVuRnJvbUZlYXR1cmUoe1xuICAgICAgICBmZWF0dXJlTmFtZTogdGhpcy5mZWF0dXJlTmFtZSxcbiAgICAgICAgc2NyZWVuTmFtZTogc2NyZWVuLnNjcmVlbk5hbWVcbiAgICAgIH0pXG4gICAgKTtcbiAgfSovXG4gIC8qKlxuICAgKiBzZWN0aW9ucyBtYXkgaGF2ZSBuZXN0ZWQgc2VjdGlvbnNcbiAgICogQHBhcmFtIHNjcmVlbiB0aGUgc2NyZWVuIHRvIGNhbmNlbFxuICAgKi9cbiAvKiBjYW5jZWxEZWxldGVTY3JlZW4oc2NyZWVuKSB7XG4gICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICBjYW5jZWxEZWxldGVTY3JlZW5Gcm9tRmVhdHVyZSh7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lLFxuICAgICAgICBzY3JlZW5OYW1lOiBzY3JlZW4uc2NyZWVuTmFtZVxuICAgICAgfSlcbiAgICApO1xuICB9Ki9cbiAgLyoqXG4gICAqIHNlY3Rpb25zIG1heSBoYXZlIG5lc3RlZCBzZWN0aW9uc1xuICAgKiBAcGFyYW0gc2NyZWVuTm9kZSB0aGUgc2NyZWVuIG5vZGVcbiAgICovXG4gLyogY29uZmlybURlbGV0ZVNjcmVlbihzY3JlZW4pIHtcbiAgICB0aGlzLmZlYXR1cmVzTWFuYWdlbWVudC5kaXNwYXRjaChcbiAgICAgIGNvbmZpcm1EZWxldGVTY3JlZW5Gcm9tRmVhdHVyZSh7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lLFxuICAgICAgICBzY3JlZW5OYW1lOiBzY3JlZW4uc2NyZWVuTmFtZVxuICAgICAgfSlcbiAgICApO1xuICB9Ki9cblxuICAvKmFkZFNjcmVlbih0ZW1wbGF0ZTogU2NyZWVuVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlTmFtZSkge1xuICAgICAgdGhpcy5mZWF0dXJlc01hbmFnZW1lbnQuZGlzcGF0Y2goXG4gICAgICAgIGFkZFNjcmVlblRvRmVhdHVyZSh7XG4gICAgICAgICAgZmVhdHVyZU5hbWU6IHRoaXMuZmVhdHVyZU5hbWUsXG4gICAgICAgICAgdGVtcGxhdGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9Ki9cblxuICAvKmFwcGx5KCkge1xuICAgIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50LmRpc3BhdGNoKFxuICAgICAgYXBwbHlGZWF0dXJlVXBkYXRlcyh7XG4gICAgICAgIGZlYXR1cmVOYW1lOiB0aGlzLmZlYXR1cmVOYW1lXG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKCk7XG4gIH0qL1xuXG4gIC8qKlxuICAgKiBBZGQgdGhlICdpbnZhbGlkLXNjcmVlbi1uYW1lJyBjbGFzcyBuYW1lIHRvIGNlbGxzIGhhdmluZyBpbnZhbGlkIGlucHV0IHRleHRcbiAgICogQHBhcmFtIG5hbWUgdGhlIHNjcmVlbiBuYW1lXG4gICAqIEBwYXJhbSBpbnB1dFJlZiBpbnB1dFJlZmVyZW5jZSBvZiB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICAvKm5hbWVWYWxpZGl0eVN0eWxlKGluZGV4OiBudW1iZXIsIGlucHV0UmVmOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNsYXNzYW1lRXhpc3QgPSBpbmNsdWRlcyhcbiAgICAgIGlucHV0UmVmLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUsXG4gICAgICAnaW52YWxpZC1zY3JlZW4tbmFtZSdcbiAgICApO1xuICAgIGNvbnN0IGlzVmFsaWQgPSAhdGhpcy5zY3JlZW5zW2luZGV4XS5lcnJvcnM7XG4gICAgaWYgKGlzVmFsaWQgIT09IHVuZGVmaW5lZCAmJiAhaXNWYWxpZCkge1xuICAgICAgaWYgKCFjbGFzc2FtZUV4aXN0KSB7XG4gICAgICAgIGlucHV0UmVmLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz1cbiAgICAgICAgICAnIGludmFsaWQtc2NyZWVuLW5hbWUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjbGFzc2FtZUV4aXN0KSB7XG4gICAgICAgIGlucHV0UmVmLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSBpbnB1dFJlZi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgJ2ludmFsaWQtc2NyZWVuLW5hbWUnLFxuICAgICAgICAgICcnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc1ZhbGlkICE9PSB1bmRlZmluZWQgJiYgaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiAhaXNWYWxpZDtcbiAgfSovXG5cbiAgLypuYW1lVmFsaWRpdHlUb29sdGlwKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNjcmVlbnNbaW5kZXhdLmVycm9ycztcbiAgfSovXG5cbiAgLyoqXG4gICAqIGVuYWJhbGUgb3IgZGlzYWJsZSB0aGUgQXBwbHkgYnV0dG9uXG4gICAqL1xuICBkaXNhYmxlQXBwbHlCdXR0b24oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gcmVxdWlyZSBzY3JlZW5zIHZhbGlkYXRlZFxuICAgIHJldHVybiB0aGlzLmRpc2FibGVBcHBseUJ1dHRvbiQ7XG4gIH1cblxuICAvKnByaXZhdGUgcmVmcmVzaEZlYXR1cmVTY3JlZW5zU3RhdGUoZmVhdHVyZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmVhdHVyZVNjcmVlbnNTdGF0ZSQgPSB0aGlzLmdldEZlYXR1cmVTdGF0ZShmZWF0dXJlTmFtZSkucGlwZShcbiAgICAgIG1hcCgoc2NyZWVuc1N0YXRlczogU2NyZWVuU3RhdGVbXSkgPT5cbiAgICAgICAgc2NyZWVuc1N0YXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHNjcmVlblN0YXRlOiBTY3JlZW5TdGF0ZSkgPT5cbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS50b0JlSW5UcmFzaCAmJiAhc2NyZWVuU3RhdGUuaW5UcmFzaFxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGFwKHNjcmVlbnNTdGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2NyZWVucyA9IHNjcmVlbnNTdGF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmRpc2FibGVBcHBseUJ1dHRvbiQgPSB0aGlzLmdldEZlYXR1cmVTdGF0ZShmZWF0dXJlTmFtZSkucGlwZShcbiAgICAgIG1hcChzY3JlZW5zU3RhdGUgPT5cbiAgICAgICAgc2NyZWVuc1N0YXRlLmV2ZXJ5KFxuICAgICAgICAgIChzY3JlZW5TdGF0ZTogU2NyZWVuU3RhdGUpID0+XG4gICAgICAgICAgICAhc2NyZWVuU3RhdGUudG9CZUFkZGVkICYmXG4gICAgICAgICAgICAhc2NyZWVuU3RhdGUuaXNJblZhbGlkICYmXG4gICAgICAgICAgICAhc2NyZWVuU3RhdGUudG9CZUluVHJhc2ggJiZcbiAgICAgICAgICAgICFzY3JlZW5TdGF0ZS5pblRyYXNoICYmXG4gICAgICAgICAgICAhc2NyZWVuU3RhdGUucmVuYW1lICYmXG4gICAgICAgICAgICBzY3JlZW5TdGF0ZS5tb2RlbENoYW5nZWRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5zY3JlZW5zSW5UcmFzaENvdW50JCA9IHRoaXMuZ2V0RmVhdHVyZVN0YXRlKGZlYXR1cmVOYW1lKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoc2NyZWVuc1N0YXRlczogU2NyZWVuU3RhdGVbXSkgPT5cbiAgICAgICAgICBzY3JlZW5zU3RhdGVzLmZpbHRlcihcbiAgICAgICAgICAgIChzY3JlZW5TdGF0ZTogU2NyZWVuU3RhdGUpID0+XG4gICAgICAgICAgICAgIHNjcmVlblN0YXRlLnRvQmVJblRyYXNoIHx8IHNjcmVlblN0YXRlLmluVHJhc2hcbiAgICAgICAgICApLmxlbmd0aFxuICAgICAgKVxuICAgICk7XG4gIH0qL1xuIC8qIHByaXZhdGUgZ2V0RmVhdHVyZVN0YXRlKGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZXNNYW5hZ2VtZW50XG4gICAgICAuc2VsZWN0KGdldFNjcmVlbnNTdGF0ZSwge1xuICAgICAgICBmZWF0dXJlTmFtZVxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2NyZWVuc1N0YXRlID0+IHtcbiAgICAgICAgICBpZiAoc2NyZWVuc1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2NyZWVuc1N0YXRlKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNjcmVlbnNTdGF0ZVtrZXldLFxuICAgICAgICAgICAgICBzY3JlZW5OYW1lOiBzY3JlZW5zU3RhdGVba2V5XS5yZW5hbWUgfHwga2V5XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH0qL1xufVxuIl19