/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { countBy } from 'lodash';
import { Validator, ValidationError } from 'jsonschema';
import { getAllWidgets } from '../../ngrx/widgets-librairies';
import { getAllScreens } from '../../ngrx/screens-librairies';
var ScreenValidationService = /** @class */ (function () {
    function ScreenValidationService(widgetsLibrairiesManagement, screensLibrairiesManagement) {
        this.widgetsLibrairiesManagement = widgetsLibrairiesManagement;
        this.screensLibrairiesManagement = screensLibrairiesManagement;
    }
    /**
     * @param {?} screensNames
     * @return {?}
     */
    ScreenValidationService.prototype.validateScreensNames = /**
     * @param {?} screensNames
     * @return {?}
     */
    function (screensNames) {
        if (screensNames && screensNames.length > 0) {
            return screensNames.reduce((/**
             * @param {?} result
             * @param {?} itm
             * @return {?}
             */
            function (result, itm) {
                /** @type {?} */
                var empty = itm.displayed.length === 0;
                if (empty) {
                    result[itm.name] = { error: 'The screen name is mandatory' };
                    return result;
                }
                /** @type {?} */
                var occurence = screensNames.filter((/**
                 * @param {?} name
                 * @return {?}
                 */
                function (name) { return name.displayed === itm.displayed; })).length;
                /** @type {?} */
                var pattern = itm.displayed.match(/[^0-9a-zA-Z_-\s]/g);
                if (occurence > 1) {
                    result[itm.name] = { error: 'This name already exists' };
                }
                if (pattern) {
                    result[itm.name] = {
                        error: 'Avoid using special characters'
                    };
                }
                return result;
            }), {});
        }
    };
    /**
     * @param {?} screenName
     * @return {?}
     */
    ScreenValidationService.prototype.validateScreenName = /**
     * @param {?} screenName
     * @return {?}
     */
    function (screenName) {
        return (screenName.match(/[^0-9a-zA-Z_-\s]/g) !== null);
    };
    // TODO: refactor to validateScreenSchema
    // TODO: refactor to validateScreenSchema
    /**
     * @param {?} screen
     * @return {?}
     */
    ScreenValidationService.prototype.validateSchema = 
    // TODO: refactor to validateScreenSchema
    /**
     * @param {?} screen
     * @return {?}
     */
    function (screen) {
        var _this = this;
        /** @type {?} */
        var components$ = this.widgetsLibrairiesManagement.select(getAllWidgets);
        /** @type {?} */
        var screenTemplates$ = this.screensLibrairiesManagement.select(getAllScreens);
        return zip(components$, screenTemplates$).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), components = _b[0], screenTemplates = _b[1];
            /** @type {?} */
            var sections = screenTemplates.find((/**
             * @param {?} screenTemplate
             * @return {?}
             */
            function (screenTemplate) { return screenTemplate.template === screen.content.template; })).sections;
            return _this._validateScreenSectionsRecursive(sections, screen.content, components);
        })));
    };
    /**
     * @private
     * @param {?} sections
     * @param {?} screen
     * @param {?} components
     * @return {?}
     */
    ScreenValidationService.prototype._validateScreenSectionsRecursive = /**
     * @private
     * @param {?} sections
     * @param {?} screen
     * @param {?} components
     * @return {?}
     */
    function (sections, screen, components) {
        var _this = this;
        return sections.reduce((/**
         * @param {?} result
         * @param {?} section
         * @return {?}
         */
        function (result, section) {
            if (section.sections) {
                return result.concat(_this._validateScreenSectionsRecursive(section.sections, screen[section.name], components));
            }
            /** @type {?} */
            var screenSectionToValidate = screen[section.name];
            if (Array.isArray(screenSectionToValidate)) {
                /** @type {?} */
                var fieldsOccurences = _this.getFielsOccurences(screenSectionToValidate);
                return result.concat(_this._validateItemsRecursive(screenSectionToValidate, fieldsOccurences, components, section.path || section.name, section.name));
            }
            return result;
        }), new Array());
    };
    /**
     * @private
     * @param {?} items
     * @param {?} fieldsOccurences
     * @param {?} components
     * @param {?} sectionPath
     * @param {?=} section
     * @return {?}
     */
    ScreenValidationService.prototype._validateItemsRecursive = /**
     * @private
     * @param {?} items
     * @param {?} fieldsOccurences
     * @param {?} components
     * @param {?} sectionPath
     * @param {?=} section
     * @return {?}
     */
    function (items, fieldsOccurences, components, sectionPath, section) {
        var _this = this;
        return items.reduce((/**
         * @param {?} result
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (result, item, index) {
            /** @type {?} */
            var deepPath = sectionPath;
            /** @type {?} */
            var sep = sectionPath.indexOf('-') > 0 ? '.' : '-';
            /** @type {?} */
            var componentMetaData = components.find((/**
             * @param {?} component
             * @return {?}
             */
            function (component) { return component.name === item.type; }));
            if (componentMetaData) {
                /** @type {?} */
                var jsonSchemaValidator = new Validator();
                /** @type {?} */
                var validatorResult = jsonSchemaValidator.validate(item.properties || item, componentMetaData.schema);
                // check fieldrequired and namerequired
                if ((componentMetaData.fieldRequired || componentMetaData.nameRequired) &&
                    (!item.name || item.name === '')) {
                    /** @type {?} */
                    var property = componentMetaData.fieldRequired ? 'Field' : 'Name';
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'required', property));
                }
                // check occurrence
                if (item.name && fieldsOccurences[item.name] !== 1) {
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'unique', ''));
                }
                if (validatorResult.errors && validatorResult.errors.length > 0) {
                    /** @type {?} */
                    var validationInfo = {
                        message: _this._getErrorMessage(validatorResult),
                        path: "" + deepPath + sep + index.toString()
                    };
                    result.push(validationInfo);
                }
                // handle containers items
                if (item.components) {
                    if (!deepPath) {
                        deepPath = index.toString();
                    }
                    else {
                        deepPath = "" + deepPath + sep + index;
                    }
                    return result.concat(_this._validateItemsRecursive(item.components, fieldsOccurences, components, deepPath, section));
                }
            }
            return result;
        }), []);
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ScreenValidationService.prototype.getFielsOccurences = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var allComponents = this.getAllComponents(items);
        return countBy(allComponents, 'name');
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ScreenValidationService.prototype.getAllComponents = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var allComponents = [];
        items.forEach((/**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            if (component.components) {
                allComponents.push.apply(allComponents, tslib_1.__spread(_this.getAllComponents(component.components)));
            }
            allComponents.push(component);
        }));
        return allComponents;
    };
    /**
     * @private
     * @param {?} validatorResult
     * @return {?}
     */
    ScreenValidationService.prototype._getErrorMessage = /**
     * @private
     * @param {?} validatorResult
     * @return {?}
     */
    function (validatorResult) {
        /** @type {?} */
        var requiredPropertiesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error.name === 'required'; }));
        /** @type {?} */
        var requiredMessage = '';
        if (requiredPropertiesErrors.length > 0) {
            requiredMessage = requiredPropertiesErrors.reduce((/**
             * @param {?} requiredMsg
             * @param {?} error
             * @return {?}
             */
            function (requiredMsg, error) {
                return requiredMsg + " <li> " + error.argument + " </li>";
            }), '');
            /** @type {?} */
            var title = '<span>The properties below are required :</span>';
            requiredMessage = requiredMessage
                ? title + ("<ul>" + requiredMessage + "</ul>")
                : '';
        }
        /** @type {?} */
        var invalidTypeErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error.name === 'type'; }));
        /** @type {?} */
        var invalidTypeMessage = '';
        if (invalidTypeErrors.length > 0) {
            invalidTypeMessage = invalidTypeErrors.reduce((/**
             * @param {?} invalidMsg
             * @param {?} error
             * @return {?}
             */
            function (invalidMsg, error) {
                return invalidMsg + " <li> " + error.property.replace('instance.', '') + " " + error.message;
            }), '');
            /** @type {?} */
            var title = '<span>The properties below have invalid type :</span>';
            invalidTypeMessage = invalidTypeMessage
                ? title + ("<ul>" + invalidTypeMessage + "</ul>")
                : '';
        }
        /** @type {?} */
        var invalidEnumValuesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error.name === 'enum'; }));
        /** @type {?} */
        var invalidEnumValuesMessage = '';
        if (invalidEnumValuesErrors.length > 0) {
            invalidEnumValuesMessage = invalidEnumValuesErrors.reduce((/**
             * @param {?} invalidValueEnum
             * @param {?} error
             * @return {?}
             */
            function (invalidValueEnum, error) {
                return invalidValueEnum + " <li> " + error.property.replace('instance.', '') + " " + error.message;
            }), '');
            /** @type {?} */
            var title = '<span>The properties below have invalid value selected :</span>';
            invalidEnumValuesMessage = invalidEnumValuesMessage
                ? title + ("<ul>" + invalidEnumValuesMessage + "</ul>")
                : '';
        }
        /** @type {?} */
        var invalidItemName = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error.name === 'unique'; }));
        /** @type {?} */
        var invalidItemNameMessage = invalidItemName.length > 0 ? '<span>Duplicated name</span><br/>' : '';
        return "" + invalidItemNameMessage + requiredMessage + invalidTypeMessage + invalidEnumValuesMessage;
    };
    ScreenValidationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScreenValidationService.ctorParameters = function () { return [
        { type: Store },
        { type: Store }
    ]; };
    return ScreenValidationService;
}());
export { ScreenValidationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScreenValidationService.prototype.widgetsLibrairiesManagement;
    /**
     * @type {?}
     * @private
     */
    ScreenValidationService.prototype.screensLibrairiesManagement;
}
/**
 * @record
 */
export function ValidationInfo() { }
if (false) {
    /** @type {?} */
    ValidationInfo.prototype.message;
    /** @type {?|undefined} */
    ValidationInfo.prototype.path;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zZXJ2aWNlcy92YWxpZGF0aW9uL3NjcmVlbi12YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFjLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFtQixlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFLekUsT0FBTyxFQUVMLGFBQWEsRUFDZCxNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFFTCxhQUFhLEVBQ2QsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QztJQUdFLGlDQUNVLDJCQUEwRCxFQUMxRCwyQkFBMEQ7UUFEMUQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUErQjtRQUMxRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQStCO0lBQ2pFLENBQUM7Ozs7O0lBRUosc0RBQW9COzs7O0lBQXBCLFVBQ0UsWUFBbUQ7UUFJbkQsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxZQUFZLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLE1BQU0sRUFBRSxHQUFHOztvQkFDL0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3hDLElBQUksS0FBSyxFQUFFO29CQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMs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LGNBQVMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3ZELFdBQVcsRUFDWCxFQUFFLENBQ0gsU0FBSSxLQUFLLENBQUMsT0FBUyxDQUFDO1lBQ3ZCLENBQUMsR0FDRCxFQUFFLENBQ0gsQ0FBQzs7Z0JBQ0ksS0FBSyxHQUNULGlFQUFpRTtZQUNuRSx3QkFBd0IsR0FBRyx3QkFBd0I7Z0JBQ2pELENBQUMsQ0FBQyxLQUFLLElBQUcsU0FBTyx3QkFBd0IsVUFBTyxDQUFBO2dCQUNoRCxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ1I7O1lBQ0ssZUFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUNuRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF2QixDQUF1QixFQUNqQzs7WUFDSyxzQkFBc0IsR0FDMUIsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZFLE9BQU8sS0FBRyxzQkFBc0IsR0FBRyxlQUFlLEdBQUcsa0JBQWtCLEdBQUcsd0JBQTBCLENBQUM7SUFDdkcsQ0FBQzs7Z0JBL09GLFVBQVU7Ozs7Z0JBbkJGLEtBQUs7Z0JBQUwsS0FBSzs7SUFtUWQsOEJBQUM7Q0FBQSxBQWhQRCxJQWdQQztTQTlPWSx1QkFBdUI7Ozs7OztJQUVoQyw4REFBa0U7Ozs7O0lBQ2xFLDhEQUFrRTs7Ozs7QUE2T3RFLG9DQUdDOzs7SUFGQyxpQ0FBZ0I7O0lBQ2hCLDhCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY291bnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRvclJlc3VsdCwgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnanNvbnNjaGVtYSc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcblxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9zY3JlZW5zLWxpYnJhcnknO1xuaW1wb3J0IHsgVWlDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0cy1saWJyYXJ5JztcbmltcG9ydCB7XG4gIFdpZGdldHNMaWJyYWlyaWVzU3RhdGUsXG4gIGdldEFsbFdpZGdldHNcbn0gZnJvbSAnLi4vLi4vbmdyeC93aWRnZXRzLWxpYnJhaXJpZXMnO1xuaW1wb3J0IHtcbiAgU2NyZWVuc0xpYnJhaXJpZXNTdGF0ZSxcbiAgZ2V0QWxsU2NyZWVuc1xufSBmcm9tICcuLi8uLi9uZ3J4L3NjcmVlbnMtbGlicmFpcmllcyc7XG5cbkBJbmplY3RhYmxlKClcbi8vIFRPRE86IHJlZmFjdG9yIHRvIFZhbGlkYXRpb25TZXJ2aWNlIHZhbGlkYXRlIHBhZ2Uvc2NyZWVuXG5leHBvcnQgY2xhc3MgU2NyZWVuVmFsaWRhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudDogU3RvcmU8V2lkZ2V0c0xpYnJhaXJpZXNTdGF0ZT4sXG4gICAgcHJpdmF0ZSBzY3JlZW5zTGlicmFpcmllc01hbmFnZW1lbnQ6IFN0b3JlPFNjcmVlbnNMaWJyYWlyaWVzU3RhdGU+XG4gICkge31cblxuICB2YWxpZGF0ZVNjcmVlbnNOYW1lcyhcbiAgICBzY3JlZW5zTmFtZXM6IHsgZGlzcGxheWVkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W11cbiAgKToge1xuICAgIFtrZXk6IHN0cmluZ106IHsgZXJyb3I6IHN0cmluZyB9O1xuICB9IHtcbiAgICBpZiAoc2NyZWVuc05hbWVzICYmIHNjcmVlbnNOYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gc2NyZWVuc05hbWVzLnJlZHVjZSgocmVzdWx0LCBpdG0pID0+IHtcbiAgICAgICAgY29uc3QgZW1wdHkgPSBpdG0uZGlzcGxheWVkLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgaWYgKGVtcHR5KSB7XG4gICAgICAgICAgcmVzdWx0W2l0bS5uYW1lXSA9IHsgZXJyb3I6ICdUaGUgc2NyZWVuIG5hbWUgaXMgbWFuZGF0b3J5JyB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2NjdXJlbmNlID0gc2NyZWVuc05hbWVzLmZpbHRlcihcbiAgICAgICAgICBuYW1lID0+IG5hbWUuZGlzcGxheWVkID09PSBpdG0uZGlzcGxheWVkXG4gICAgICAgICkubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID1cbiAgICAgICAgICBpdG0uZGlzcGxheWVkLm1hdGNoKC9bXjAtOWEtekEtWl8tXFxzXS9nKTtcbiAgICAgICAgaWYgKG9jY3VyZW5jZSA+IDEpIHtcbiAgICAgICAgICByZXN1bHRbaXRtLm5hbWVdID0geyBlcnJvcjogJ1RoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cycgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgIHJlc3VsdFtpdG0ubmFtZV0gPSB7XG4gICAgICAgICAgICBlcnJvcjogJ0F2b2lkIHVzaW5nIHNwZWNpYWwgY2hhcmFjdGVycydcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGVTY3JlZW5OYW1lKHNjcmVlbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzY3JlZW5OYW1lLm1hdGNoKC9bXjAtOWEtekEtWl8tXFxzXS9nKSAhPT0gbnVsbFxuICAgICk7XG4gIH1cbiAgLy8gVE9ETzogcmVmYWN0b3IgdG8gdmFsaWRhdGVTY3JlZW5TY2hlbWFcbiAgdmFsaWRhdGVTY2hlbWEoc2NyZWVuOiBTY3JlZW4pOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25JbmZvW10+IHtcbiAgICBjb25zdCBjb21wb25lbnRzJCA9IHRoaXMud2lkZ2V0c0xpYnJhaXJpZXNNYW5hZ2VtZW50LnNlbGVjdChnZXRBbGxXaWRnZXRzKTtcblxuICAgIGNvbnN0IHNjcmVlblRlbXBsYXRlcyQgPSB0aGlzLnNjcmVlbnNMaWJyYWlyaWVzTWFuYWdlbWVudC5zZWxlY3QoXG4gICAgICBnZXRBbGxTY3JlZW5zXG4gICAgKTtcblxuICAgIHJldHVybiB6aXAoY29tcG9uZW50cyQsIHNjcmVlblRlbXBsYXRlcyQpLnBpcGUoXG4gICAgICBtYXAoKFtjb21wb25lbnRzLCBzY3JlZW5UZW1wbGF0ZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gc2NyZWVuVGVtcGxhdGVzLmZpbmQoXG4gICAgICAgICAgc2NyZWVuVGVtcGxhdGUgPT4gc2NyZWVuVGVtcGxhdGUudGVtcGxhdGUgPT09IHNjcmVlbi5jb250ZW50LnRlbXBsYXRlXG4gICAgICAgICkuc2VjdGlvbnM7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVNjcmVlblNlY3Rpb25zUmVjdXJzaXZlKFxuICAgICAgICAgIHNlY3Rpb25zLFxuICAgICAgICAgIHNjcmVlbi5jb250ZW50LFxuICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkYXRlU2NyZWVuU2VjdGlvbnNSZWN1cnNpdmUoXG4gICAgc2VjdGlvbnM6IFNlY3Rpb25bXSxcbiAgICBzY3JlZW46IFNjcmVlbixcbiAgICBjb21wb25lbnRzOiBVaUNvbXBvbmVudFtdXG4gICk6IFZhbGlkYXRpb25JbmZvW10ge1xuICAgIHJldHVybiBzZWN0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgc2VjdGlvbikgPT4ge1xuICAgICAgaWYgKHNlY3Rpb24uc2VjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoXG4gICAgICAgICAgdGhpcy5fdmFsaWRhdGVTY3JlZW5TZWN0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgICAgIHNlY3Rpb24uc2VjdGlvbnMsXG4gICAgICAgICAgICBzY3JlZW5bc2VjdGlvbi5uYW1lXSxcbiAgICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBzY3JlZW5TZWN0aW9uVG9WYWxpZGF0ZSA9IHNjcmVlbltzZWN0aW9uLm5hbWVdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NyZWVuU2VjdGlvblRvVmFsaWRhdGUpKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkc09jY3VyZW5jZXMgPSB0aGlzLmdldEZpZWxzT2NjdXJlbmNlcyhcbiAgICAgICAgICBzY3JlZW5TZWN0aW9uVG9WYWxpZGF0ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChcbiAgICAgICAgICB0aGlzLl92YWxpZGF0ZUl0ZW1zUmVjdXJzaXZlKFxuICAgICAgICAgICAgc2NyZWVuU2VjdGlvblRvVmFsaWRhdGUsXG4gICAgICAgICAgICBmaWVsZHNPY2N1cmVuY2VzLFxuICAgICAgICAgICAgY29tcG9uZW50cyxcbiAgICAgICAgICAgIHNlY3Rpb24ucGF0aCB8fCBzZWN0aW9uLm5hbWUsXG4gICAgICAgICAgICBzZWN0aW9uLm5hbWVcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIG5ldyBBcnJheTxWYWxpZGF0aW9uSW5mbz4oKSk7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZGF0ZUl0ZW1zUmVjdXJzaXZlKFxuICAgIGl0ZW1zOiBhbnlbXSxcbiAgICBmaWVsZHNPY2N1cmVuY2VzLFxuICAgIGNvbXBvbmVudHM6IFVpQ29tcG9uZW50W10sXG4gICAgc2VjdGlvblBhdGg6IHN0cmluZyxcbiAgICBzZWN0aW9uPzogc3RyaW5nXG4gICk6IFZhbGlkYXRpb25JbmZvW10ge1xuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKHJlc3VsdCwgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBkZWVwUGF0aCA9IHNlY3Rpb25QYXRoO1xuICAgICAgY29uc3Qgc2VwID0gc2VjdGlvblBhdGguaW5kZXhPZignLScpID4gMCA/ICcuJyA6ICctJztcbiAgICAgIGNvbnN0IGNvbXBvbmVudE1ldGFEYXRhID0gY29tcG9uZW50cy5maW5kKFxuICAgICAgICBjb21wb25lbnQgPT4gY29tcG9uZW50Lm5hbWUgPT09IGl0ZW0udHlwZVxuICAgICAgKTtcbiAgICAgIGlmIChjb21wb25lbnRNZXRhRGF0YSkge1xuICAgICAgICBjb25zdCBqc29uU2NoZW1hVmFsaWRhdG9yOiBWYWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvclJlc3VsdDogVmFsaWRhdG9yUmVzdWx0ID0ganNvblNjaGVtYVZhbGlkYXRvci52YWxpZGF0ZShcbiAgICAgICAgICBpdGVtLnByb3BlcnRpZXMgfHwgaXRlbSxcbiAgICAgICAgICBjb21wb25lbnRNZXRhRGF0YS5zY2hlbWFcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY2hlY2sgZmllbGRyZXF1aXJlZCBhbmQgbmFtZXJlcXVpcmVkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoY29tcG9uZW50TWV0YURhdGEuZmllbGRSZXF1aXJlZCB8fCBjb21wb25lbnRNZXRhRGF0YS5uYW1lUmVxdWlyZWQpICYmXG4gICAgICAgICAgKCFpdGVtLm5hbWUgfHwgaXRlbS5uYW1lID09PSAnJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBjb21wb25lbnRNZXRhRGF0YS5maWVsZFJlcXVpcmVkID8gJ0ZpZWxkJyA6ICdOYW1lJztcbiAgICAgICAgICB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLnB1c2goXG4gICAgICAgICAgICBuZXcgVmFsaWRhdGlvbkVycm9yKCcnLCAnJywgdW5kZWZpbmVkLCAnJywgJ3JlcXVpcmVkJywgcHJvcGVydHkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBvY2N1cnJlbmNlXG4gICAgICAgIGlmIChpdGVtLm5hbWUgJiYgZmllbGRzT2NjdXJlbmNlc1tpdGVtLm5hbWVdICE9PSAxKSB7XG4gICAgICAgICAgdmFsaWRhdG9yUmVzdWx0LmVycm9ycy5wdXNoKFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRpb25FcnJvcignJywgJycsIHVuZGVmaW5lZCwgJycsICd1bmlxdWUnLCAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQuZXJyb3JzICYmIHZhbGlkYXRvclJlc3VsdC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JbmZvOiBWYWxpZGF0aW9uSW5mbyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuX2dldEVycm9yTWVzc2FnZSh2YWxpZGF0b3JSZXN1bHQpLFxuICAgICAgICAgICAgcGF0aDogYCR7ZGVlcFBhdGh9JHtzZXB9JHtpbmRleC50b1N0cmluZygpfWBcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVzdWx0LnB1c2godmFsaWRhdGlvbkluZm8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBjb250YWluZXJzIGl0ZW1zXG4gICAgICAgIGlmIChpdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICBpZiAoIWRlZXBQYXRoKSB7XG4gICAgICAgICAgICBkZWVwUGF0aCA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlZXBQYXRoID0gYCR7ZGVlcFBhdGh9JHtzZXB9JHtpbmRleH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlSXRlbXNSZWN1cnNpdmUoXG4gICAgICAgICAgICAgIGl0ZW0uY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgZmllbGRzT2NjdXJlbmNlcyxcbiAgICAgICAgICAgICAgY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgZGVlcFBhdGgsXG4gICAgICAgICAgICAgIHNlY3Rpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKTtcbiAgfVxuICBwcml2YXRlIGdldEZpZWxzT2NjdXJlbmNlcyhpdGVtczogYW55W10pIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gdGhpcy5nZXRBbGxDb21wb25lbnRzKGl0ZW1zKTtcbiAgICByZXR1cm4gY291bnRCeShhbGxDb21wb25lbnRzLCAnbmFtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbGxDb21wb25lbnRzKGl0ZW1zOiBhbnlbXSkge1xuICAgIGNvbnN0IGFsbENvbXBvbmVudHMgPSBbXTtcbiAgICBpdGVtcy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudHMpIHtcbiAgICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKC4uLnRoaXMuZ2V0QWxsQ29tcG9uZW50cyhjb21wb25lbnQuY29tcG9uZW50cykpO1xuICAgICAgfVxuICAgICAgYWxsQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG4gIH1cblxuICBwcml2YXRlIF9nZXRFcnJvck1lc3NhZ2UodmFsaWRhdG9yUmVzdWx0OiBWYWxpZGF0b3JSZXN1bHQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcXVpcmVkUHJvcGVydGllc0Vycm9ycyA9IHZhbGlkYXRvclJlc3VsdC5lcnJvcnMuZmlsdGVyKFxuICAgICAgZXJyb3IgPT4gZXJyb3IubmFtZSA9PT0gJ3JlcXVpcmVkJ1xuICAgICk7XG4gICAgbGV0IHJlcXVpcmVkTWVzc2FnZSA9ICcnO1xuICAgIGlmIChyZXF1aXJlZFByb3BlcnRpZXNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVxdWlyZWRNZXNzYWdlID0gcmVxdWlyZWRQcm9wZXJ0aWVzRXJyb3JzLnJlZHVjZShcbiAgICAgICAgKHJlcXVpcmVkTXNnLCBlcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtyZXF1aXJlZE1zZ30gPGxpPiAke2Vycm9yLmFyZ3VtZW50fSA8L2xpPmA7XG4gICAgICAgIH0sXG4gICAgICAgICcnXG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSAnPHNwYW4+VGhlIHByb3BlcnRpZXMgYmVsb3cgYXJlIHJlcXVpcmVkIDo8L3NwYW4+JztcbiAgICAgIHJlcXVpcmVkTWVzc2FnZSA9IHJlcXVpcmVkTWVzc2FnZVxuICAgICAgICA/IHRpdGxlICsgYDx1bD4ke3JlcXVpcmVkTWVzc2FnZX08L3VsPmBcbiAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkVHlwZUVycm9ycyA9IHZhbGlkYXRvclJlc3VsdC5lcnJvcnMuZmlsdGVyKFxuICAgICAgZXJyb3IgPT4gZXJyb3IubmFtZSA9PT0gJ3R5cGUnXG4gICAgKTtcbiAgICBsZXQgaW52YWxpZFR5cGVNZXNzYWdlID0gJyc7XG4gICAgaWYgKGludmFsaWRUeXBlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFsaWRUeXBlTWVzc2FnZSA9IGludmFsaWRUeXBlRXJyb3JzLnJlZHVjZSgoaW52YWxpZE1zZywgZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2ludmFsaWRNc2d9IDxsaT4gJHtlcnJvci5wcm9wZXJ0eS5yZXBsYWNlKCdpbnN0YW5jZS4nLCAnJyl9ICR7XG4gICAgICAgICAgZXJyb3IubWVzc2FnZVxuICAgICAgICB9YDtcbiAgICAgIH0sICcnKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gJzxzcGFuPlRoZSBwcm9wZXJ0aWVzIGJlbG93IGhhdmUgaW52YWxpZCB0eXBlIDo8L3NwYW4+JztcbiAgICAgIGludmFsaWRUeXBlTWVzc2FnZSA9IGludmFsaWRUeXBlTWVzc2FnZVxuICAgICAgICA/IHRpdGxlICsgYDx1bD4ke2ludmFsaWRUeXBlTWVzc2FnZX08L3VsPmBcbiAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkRW51bVZhbHVlc0Vycm9ycyA9IHZhbGlkYXRvclJlc3VsdC5lcnJvcnMuZmlsdGVyKFxuICAgICAgZXJyb3IgPT4gZXJyb3IubmFtZSA9PT0gJ2VudW0nXG4gICAgKTtcbiAgICBsZXQgaW52YWxpZEVudW1WYWx1ZXNNZXNzYWdlID0gJyc7XG4gICAgaWYgKGludmFsaWRFbnVtVmFsdWVzRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFsaWRFbnVtVmFsdWVzTWVzc2FnZSA9IGludmFsaWRFbnVtVmFsdWVzRXJyb3JzLnJlZHVjZShcbiAgICAgICAgKGludmFsaWRWYWx1ZUVudW0sIGVycm9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke2ludmFsaWRWYWx1ZUVudW19IDxsaT4gJHtlcnJvci5wcm9wZXJ0eS5yZXBsYWNlKFxuICAgICAgICAgICAgJ2luc3RhbmNlLicsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICl9ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgICAgICB9LFxuICAgICAgICAnJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID1cbiAgICAgICAgJzxzcGFuPlRoZSBwcm9wZXJ0aWVzIGJlbG93IGhhdmUgaW52YWxpZCB2YWx1ZSBzZWxlY3RlZCA6PC9zcGFuPic7XG4gICAgICBpbnZhbGlkRW51bVZhbHVlc01lc3NhZ2UgPSBpbnZhbGlkRW51bVZhbHVlc01lc3NhZ2VcbiAgICAgICAgPyB0aXRsZSArIGA8dWw+JHtpbnZhbGlkRW51bVZhbHVlc01lc3NhZ2V9PC91bD5gXG4gICAgICAgIDogJyc7XG4gICAgfVxuICAgIGNvbnN0IGludmFsaWRJdGVtTmFtZSA9IHZhbGlkYXRvclJlc3VsdC5lcnJvcnMuZmlsdGVyKFxuICAgICAgZXJyb3IgPT4gZXJyb3IubmFtZSA9PT0gJ3VuaXF1ZSdcbiAgICApO1xuICAgIGNvbnN0IGludmFsaWRJdGVtTmFtZU1lc3NhZ2UgPVxuICAgICAgaW52YWxpZEl0ZW1OYW1lLmxlbmd0aCA+IDAgPyAnPHNwYW4+RHVwbGljYXRlZCBuYW1lPC9zcGFuPjxici8+JyA6ICcnO1xuICAgIHJldHVybiBgJHtpbnZhbGlkSXRlbU5hbWVNZXNzYWdlfSR7cmVxdWlyZWRNZXNzYWdlfSR7aW52YWxpZFR5cGVNZXNzYWdlfSR7aW52YWxpZEVudW1WYWx1ZXNNZXNzYWdlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uSW5mbyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbn1cbiJdfQ==