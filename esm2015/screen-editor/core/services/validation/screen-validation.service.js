/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { countBy } from 'lodash';
import { Validator, ValidationError } from 'jsonschema';
import { getAllWidgets } from '../../ngrx/widgets-librairies';
import { getAllScreens } from '../../ngrx/screens-librairies';
// TODO: refactor to ValidationService validate page/screen
export class ScreenValidationService {
    /**
     * @param {?} widgetsLibrairiesManagement
     * @param {?} screensLibrairiesManagement
     */
    constructor(widgetsLibrairiesManagement, screensLibrairiesManagement) {
        this.widgetsLibrairiesManagement = widgetsLibrairiesManagement;
        this.screensLibrairiesManagement = screensLibrairiesManagement;
    }
    /**
     * @param {?} screensNames
     * @return {?}
     */
    validateScreensNames(screensNames) {
        if (screensNames && screensNames.length > 0) {
            return screensNames.reduce((/**
             * @param {?} result
             * @param {?} itm
             * @return {?}
             */
            (result, itm) => {
                /** @type {?} */
                const empty = itm.displayed.length === 0;
                if (empty) {
                    result[itm.name] = { error: 'The screen name is mandatory' };
                    return result;
                }
                /** @type {?} */
                const occurence = screensNames.filter((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => name.displayed === itm.displayed)).length;
                /** @type {?} */
                const pattern = itm.displayed.match(/[^0-9a-zA-Z_-\s]/g);
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
    }
    /**
     * @param {?} screenName
     * @return {?}
     */
    validateScreenName(screenName) {
        return (screenName.match(/[^0-9a-zA-Z_-\s]/g) !== null);
    }
    // TODO: refactor to validateScreenSchema
    /**
     * @param {?} screen
     * @return {?}
     */
    validateSchema(screen) {
        /** @type {?} */
        const components$ = this.widgetsLibrairiesManagement.select(getAllWidgets);
        /** @type {?} */
        const screenTemplates$ = this.screensLibrairiesManagement.select(getAllScreens);
        return zip(components$, screenTemplates$).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([components, screenTemplates]) => {
            /** @type {?} */
            const sections = screenTemplates.find((/**
             * @param {?} screenTemplate
             * @return {?}
             */
            screenTemplate => screenTemplate.template === screen.content.template)).sections;
            return this._validateScreenSectionsRecursive(sections, screen.content, components);
        })));
    }
    /**
     * @private
     * @param {?} sections
     * @param {?} screen
     * @param {?} components
     * @return {?}
     */
    _validateScreenSectionsRecursive(sections, screen, components) {
        return sections.reduce((/**
         * @param {?} result
         * @param {?} section
         * @return {?}
         */
        (result, section) => {
            if (section.sections) {
                return result.concat(this._validateScreenSectionsRecursive(section.sections, screen[section.name], components));
            }
            /** @type {?} */
            const screenSectionToValidate = screen[section.name];
            if (Array.isArray(screenSectionToValidate)) {
                /** @type {?} */
                const fieldsOccurences = this.getFielsOccurences(screenSectionToValidate);
                return result.concat(this._validateItemsRecursive(screenSectionToValidate, fieldsOccurences, components, section.path || section.name, section.name));
            }
            return result;
        }), new Array());
    }
    /**
     * @private
     * @param {?} items
     * @param {?} fieldsOccurences
     * @param {?} components
     * @param {?} sectionPath
     * @param {?=} section
     * @return {?}
     */
    _validateItemsRecursive(items, fieldsOccurences, components, sectionPath, section) {
        return items.reduce((/**
         * @param {?} result
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (result, item, index) => {
            /** @type {?} */
            let deepPath = sectionPath;
            /** @type {?} */
            const sep = sectionPath.indexOf('-') > 0 ? '.' : '-';
            /** @type {?} */
            const componentMetaData = components.find((/**
             * @param {?} component
             * @return {?}
             */
            component => component.name === item.type));
            if (componentMetaData) {
                /** @type {?} */
                const jsonSchemaValidator = new Validator();
                /** @type {?} */
                const validatorResult = jsonSchemaValidator.validate(item.properties || item, componentMetaData.schema);
                // check fieldrequired and namerequired
                if ((componentMetaData.fieldRequired || componentMetaData.nameRequired) &&
                    (!item.name || item.name === '')) {
                    /** @type {?} */
                    const property = componentMetaData.fieldRequired ? 'Field' : 'Name';
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'required', property));
                }
                // check occurrence
                if (item.name && fieldsOccurences[item.name] !== 1) {
                    validatorResult.errors.push(new ValidationError('', '', undefined, '', 'unique', ''));
                }
                if (validatorResult.errors && validatorResult.errors.length > 0) {
                    /** @type {?} */
                    const validationInfo = {
                        message: this._getErrorMessage(validatorResult),
                        path: `${deepPath}${sep}${index.toString()}`
                    };
                    result.push(validationInfo);
                }
                // handle containers items
                if (item.components) {
                    if (!deepPath) {
                        deepPath = index.toString();
                    }
                    else {
                        deepPath = `${deepPath}${sep}${index}`;
                    }
                    return result.concat(this._validateItemsRecursive(item.components, fieldsOccurences, components, deepPath, section));
                }
            }
            return result;
        }), []);
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    getFielsOccurences(items) {
        /** @type {?} */
        const allComponents = this.getAllComponents(items);
        return countBy(allComponents, 'name');
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    getAllComponents(items) {
        /** @type {?} */
        const allComponents = [];
        items.forEach((/**
         * @param {?} component
         * @return {?}
         */
        component => {
            if (component.components) {
                allComponents.push(...this.getAllComponents(component.components));
            }
            allComponents.push(component);
        }));
        return allComponents;
    }
    /**
     * @private
     * @param {?} validatorResult
     * @return {?}
     */
    _getErrorMessage(validatorResult) {
        /** @type {?} */
        const requiredPropertiesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'required'));
        /** @type {?} */
        let requiredMessage = '';
        if (requiredPropertiesErrors.length > 0) {
            requiredMessage = requiredPropertiesErrors.reduce((/**
             * @param {?} requiredMsg
             * @param {?} error
             * @return {?}
             */
            (requiredMsg, error) => {
                return `${requiredMsg} <li> ${error.argument} </li>`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below are required :</span>';
            requiredMessage = requiredMessage
                ? title + `<ul>${requiredMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidTypeErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'type'));
        /** @type {?} */
        let invalidTypeMessage = '';
        if (invalidTypeErrors.length > 0) {
            invalidTypeMessage = invalidTypeErrors.reduce((/**
             * @param {?} invalidMsg
             * @param {?} error
             * @return {?}
             */
            (invalidMsg, error) => {
                return `${invalidMsg} <li> ${error.property.replace('instance.', '')} ${error.message}`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below have invalid type :</span>';
            invalidTypeMessage = invalidTypeMessage
                ? title + `<ul>${invalidTypeMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidEnumValuesErrors = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'enum'));
        /** @type {?} */
        let invalidEnumValuesMessage = '';
        if (invalidEnumValuesErrors.length > 0) {
            invalidEnumValuesMessage = invalidEnumValuesErrors.reduce((/**
             * @param {?} invalidValueEnum
             * @param {?} error
             * @return {?}
             */
            (invalidValueEnum, error) => {
                return `${invalidValueEnum} <li> ${error.property.replace('instance.', '')} ${error.message}`;
            }), '');
            /** @type {?} */
            const title = '<span>The properties below have invalid value selected :</span>';
            invalidEnumValuesMessage = invalidEnumValuesMessage
                ? title + `<ul>${invalidEnumValuesMessage}</ul>`
                : '';
        }
        /** @type {?} */
        const invalidItemName = validatorResult.errors.filter((/**
         * @param {?} error
         * @return {?}
         */
        error => error.name === 'unique'));
        /** @type {?} */
        const invalidItemNameMessage = invalidItemName.length > 0 ? '<span>Duplicated name</span><br/>' : '';
        return `${invalidItemNameMessage}${requiredMessage}${invalidTypeMessage}${invalidEnumValuesMessage}`;
    }
}
ScreenValidationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScreenValidationService.ctorParameters = () => [
    { type: Store },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9zZXJ2aWNlcy92YWxpZGF0aW9uL3NjcmVlbi12YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxTQUFTLEVBQW1CLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUt6RSxPQUFPLEVBRUwsYUFBYSxFQUNkLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUVMLGFBQWEsRUFDZCxNQUFNLCtCQUErQixDQUFDO0FBR3ZDLDJEQUEyRDtBQUMzRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxZQUNVLDJCQUEwRCxFQUMxRCwyQkFBMEQ7UUFEMUQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUErQjtRQUMxRCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQStCO0lBQ2pFLENBQUM7Ozs7O0lBRUosb0JBQW9CLENBQ2xCLFlBQW1EO1FBSW5ELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sWUFBWSxDQUFDLE1BQU07Ozs7O1lBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7O3NCQUNuQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxL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Q0FBQzs7a0JBQ0ksS0FBSyxHQUNULGlFQUFpRTtZQUNuRSx3QkFBd0IsR0FBRyx3QkFBd0I7Z0JBQ2pELENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBTyx3QkFBd0IsT0FBTztnQkFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNSOztjQUNLLGVBQWUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFDbkQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFDakM7O2NBQ0ssc0JBQXNCLEdBQzFCLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN2RSxPQUFPLEdBQUcsc0JBQXNCLEdBQUcsZUFBZSxHQUFHLGtCQUFrQixHQUFHLHdCQUF3QixFQUFFLENBQUM7SUFDdkcsQ0FBQzs7O1lBL09GLFVBQVU7Ozs7WUFuQkYsS0FBSztZQUFMLEtBQUs7Ozs7Ozs7SUF1QlYsOERBQWtFOzs7OztJQUNsRSw4REFBa0U7Ozs7O0FBNk90RSxvQ0FHQzs7O0lBRkMsaUNBQWdCOztJQUNoQiw4QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGNvdW50QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBWYWxpZGF0b3JSZXN1bHQsIFZhbGlkYXRpb25FcnJvciB9IGZyb20gJ2pzb25zY2hlbWEnO1xuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL3NoYXJlZCc7XG5cbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvc2NyZWVucy1saWJyYXJ5JztcbmltcG9ydCB7IFVpQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3dpZGdldHMtbGlicmFyeSc7XG5pbXBvcnQge1xuICBXaWRnZXRzTGlicmFpcmllc1N0YXRlLFxuICBnZXRBbGxXaWRnZXRzXG59IGZyb20gJy4uLy4uL25ncngvd2lkZ2V0cy1saWJyYWlyaWVzJztcbmltcG9ydCB7XG4gIFNjcmVlbnNMaWJyYWlyaWVzU3RhdGUsXG4gIGdldEFsbFNjcmVlbnNcbn0gZnJvbSAnLi4vLi4vbmdyeC9zY3JlZW5zLWxpYnJhaXJpZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG4vLyBUT0RPOiByZWZhY3RvciB0byBWYWxpZGF0aW9uU2VydmljZSB2YWxpZGF0ZSBwYWdlL3NjcmVlblxuZXhwb3J0IGNsYXNzIFNjcmVlblZhbGlkYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRzTGlicmFpcmllc01hbmFnZW1lbnQ6IFN0b3JlPFdpZGdldHNMaWJyYWlyaWVzU3RhdGU+LFxuICAgIHByaXZhdGUgc2NyZWVuc0xpYnJhaXJpZXNNYW5hZ2VtZW50OiBTdG9yZTxTY3JlZW5zTGlicmFpcmllc1N0YXRlPlxuICApIHt9XG5cbiAgdmFsaWRhdGVTY3JlZW5zTmFtZXMoXG4gICAgc2NyZWVuc05hbWVzOiB7IGRpc3BsYXllZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdXG4gICk6IHtcbiAgICBba2V5OiBzdHJpbmddOiB7IGVycm9yOiBzdHJpbmcgfTtcbiAgfSB7XG4gICAgaWYgKHNjcmVlbnNOYW1lcyAmJiBzY3JlZW5zTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHNjcmVlbnNOYW1lcy5yZWR1Y2UoKHJlc3VsdCwgaXRtKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtcHR5ID0gaXRtLmRpc3BsYXllZC5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgIHJlc3VsdFtpdG0ubmFtZV0gPSB7IGVycm9yOiAnVGhlIHNjcmVlbiBuYW1lIGlzIG1hbmRhdG9yeScgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9jY3VyZW5jZSA9IHNjcmVlbnNOYW1lcy5maWx0ZXIoXG4gICAgICAgICAgbmFtZSA9PiBuYW1lLmRpc3BsYXllZCA9PT0gaXRtLmRpc3BsYXllZFxuICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9XG4gICAgICAgICAgaXRtLmRpc3BsYXllZC5tYXRjaCgvW14wLTlhLXpBLVpfLVxcc10vZyk7XG4gICAgICAgIGlmIChvY2N1cmVuY2UgPiAxKSB7XG4gICAgICAgICAgcmVzdWx0W2l0bS5uYW1lXSA9IHsgZXJyb3I6ICdUaGlzIG5hbWUgYWxyZWFkeSBleGlzdHMnIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgICByZXN1bHRbaXRtLm5hbWVdID0ge1xuICAgICAgICAgICAgZXJyb3I6ICdBdm9pZCB1c2luZyBzcGVjaWFsIGNoYXJhY3RlcnMnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlU2NyZWVuTmFtZShzY3JlZW5OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgc2NyZWVuTmFtZS5tYXRjaCgvW14wLTlhLXpBLVpfLVxcc10vZykgIT09IG51bGxcbiAgICApO1xuICB9XG4gIC8vIFRPRE86IHJlZmFjdG9yIHRvIHZhbGlkYXRlU2NyZWVuU2NoZW1hXG4gIHZhbGlkYXRlU2NoZW1hKHNjcmVlbjogU2NyZWVuKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uSW5mb1tdPiB7XG4gICAgY29uc3QgY29tcG9uZW50cyQgPSB0aGlzLndpZGdldHNMaWJyYWlyaWVzTWFuYWdlbWVudC5zZWxlY3QoZ2V0QWxsV2lkZ2V0cyk7XG5cbiAgICBjb25zdCBzY3JlZW5UZW1wbGF0ZXMkID0gdGhpcy5zY3JlZW5zTGlicmFpcmllc01hbmFnZW1lbnQuc2VsZWN0KFxuICAgICAgZ2V0QWxsU2NyZWVuc1xuICAgICk7XG5cbiAgICByZXR1cm4gemlwKGNvbXBvbmVudHMkLCBzY3JlZW5UZW1wbGF0ZXMkKS5waXBlKFxuICAgICAgbWFwKChbY29tcG9uZW50cywgc2NyZWVuVGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHNjcmVlblRlbXBsYXRlcy5maW5kKFxuICAgICAgICAgIHNjcmVlblRlbXBsYXRlID0+IHNjcmVlblRlbXBsYXRlLnRlbXBsYXRlID09PSBzY3JlZW4uY29udGVudC50ZW1wbGF0ZVxuICAgICAgICApLnNlY3Rpb25zO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTY3JlZW5TZWN0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgICBzZWN0aW9ucyxcbiAgICAgICAgICBzY3JlZW4uY29udGVudCxcbiAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZGF0ZVNjcmVlblNlY3Rpb25zUmVjdXJzaXZlKFxuICAgIHNlY3Rpb25zOiBTZWN0aW9uW10sXG4gICAgc2NyZWVuOiBTY3JlZW4sXG4gICAgY29tcG9uZW50czogVWlDb21wb25lbnRbXVxuICApOiBWYWxpZGF0aW9uSW5mb1tdIHtcbiAgICByZXR1cm4gc2VjdGlvbnMucmVkdWNlKChyZXN1bHQsIHNlY3Rpb24pID0+IHtcbiAgICAgIGlmIChzZWN0aW9uLnNlY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KFxuICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlU2NyZWVuU2VjdGlvbnNSZWN1cnNpdmUoXG4gICAgICAgICAgICBzZWN0aW9uLnNlY3Rpb25zLFxuICAgICAgICAgICAgc2NyZWVuW3NlY3Rpb24ubmFtZV0sXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NyZWVuU2VjdGlvblRvVmFsaWRhdGUgPSBzY3JlZW5bc2VjdGlvbi5uYW1lXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjcmVlblNlY3Rpb25Ub1ZhbGlkYXRlKSkge1xuICAgICAgICBjb25zdCBmaWVsZHNPY2N1cmVuY2VzID0gdGhpcy5nZXRGaWVsc09jY3VyZW5jZXMoXG4gICAgICAgICAgc2NyZWVuU2VjdGlvblRvVmFsaWRhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoXG4gICAgICAgICAgdGhpcy5fdmFsaWRhdGVJdGVtc1JlY3Vyc2l2ZShcbiAgICAgICAgICAgIHNjcmVlblNlY3Rpb25Ub1ZhbGlkYXRlLFxuICAgICAgICAgICAgZmllbGRzT2NjdXJlbmNlcyxcbiAgICAgICAgICAgIGNvbXBvbmVudHMsXG4gICAgICAgICAgICBzZWN0aW9uLnBhdGggfHwgc2VjdGlvbi5uYW1lLFxuICAgICAgICAgICAgc2VjdGlvbi5uYW1lXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBuZXcgQXJyYXk8VmFsaWRhdGlvbkluZm8+KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsaWRhdGVJdGVtc1JlY3Vyc2l2ZShcbiAgICBpdGVtczogYW55W10sXG4gICAgZmllbGRzT2NjdXJlbmNlcyxcbiAgICBjb21wb25lbnRzOiBVaUNvbXBvbmVudFtdLFxuICAgIHNlY3Rpb25QYXRoOiBzdHJpbmcsXG4gICAgc2VjdGlvbj86IHN0cmluZ1xuICApOiBWYWxpZGF0aW9uSW5mb1tdIHtcbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKChyZXN1bHQsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZGVlcFBhdGggPSBzZWN0aW9uUGF0aDtcbiAgICAgIGNvbnN0IHNlcCA9IHNlY3Rpb25QYXRoLmluZGV4T2YoJy0nKSA+IDAgPyAnLicgOiAnLSc7XG4gICAgICBjb25zdCBjb21wb25lbnRNZXRhRGF0YSA9IGNvbXBvbmVudHMuZmluZChcbiAgICAgICAgY29tcG9uZW50ID0+IGNvbXBvbmVudC5uYW1lID09PSBpdGVtLnR5cGVcbiAgICAgICk7XG4gICAgICBpZiAoY29tcG9uZW50TWV0YURhdGEpIHtcbiAgICAgICAgY29uc3QganNvblNjaGVtYVZhbGlkYXRvcjogVmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xuICAgICAgICBjb25zdCB2YWxpZGF0b3JSZXN1bHQ6IFZhbGlkYXRvclJlc3VsdCA9IGpzb25TY2hlbWFWYWxpZGF0b3IudmFsaWRhdGUoXG4gICAgICAgICAgaXRlbS5wcm9wZXJ0aWVzIHx8IGl0ZW0sXG4gICAgICAgICAgY29tcG9uZW50TWV0YURhdGEuc2NoZW1hXG4gICAgICAgICk7XG4gICAgICAgIC8vIGNoZWNrIGZpZWxkcmVxdWlyZWQgYW5kIG5hbWVyZXF1aXJlZFxuICAgICAgICBpZiAoXG4gICAgICAgICAgKGNvbXBvbmVudE1ldGFEYXRhLmZpZWxkUmVxdWlyZWQgfHwgY29tcG9uZW50TWV0YURhdGEubmFtZVJlcXVpcmVkKSAmJlxuICAgICAgICAgICghaXRlbS5uYW1lIHx8IGl0ZW0ubmFtZSA9PT0gJycpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gY29tcG9uZW50TWV0YURhdGEuZmllbGRSZXF1aXJlZCA/ICdGaWVsZCcgOiAnTmFtZSc7XG4gICAgICAgICAgdmFsaWRhdG9yUmVzdWx0LmVycm9ycy5wdXNoKFxuICAgICAgICAgICAgbmV3IFZhbGlkYXRpb25FcnJvcignJywgJycsIHVuZGVmaW5lZCwgJycsICdyZXF1aXJlZCcsIHByb3BlcnR5KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgb2NjdXJyZW5jZVxuICAgICAgICBpZiAoaXRlbS5uYW1lICYmIGZpZWxkc09jY3VyZW5jZXNbaXRlbS5uYW1lXSAhPT0gMSkge1xuICAgICAgICAgIHZhbGlkYXRvclJlc3VsdC5lcnJvcnMucHVzaChcbiAgICAgICAgICAgIG5ldyBWYWxpZGF0aW9uRXJyb3IoJycsICcnLCB1bmRlZmluZWQsICcnLCAndW5pcXVlJywgJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRhdG9yUmVzdWx0LmVycm9ycyAmJiB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSW5mbzogVmFsaWRhdGlvbkluZm8gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLl9nZXRFcnJvck1lc3NhZ2UodmFsaWRhdG9yUmVzdWx0KSxcbiAgICAgICAgICAgIHBhdGg6IGAke2RlZXBQYXRofSR7c2VwfSR7aW5kZXgudG9TdHJpbmcoKX1gXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbGlkYXRpb25JbmZvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgY29udGFpbmVycyBpdGVtc1xuICAgICAgICBpZiAoaXRlbS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgaWYgKCFkZWVwUGF0aCkge1xuICAgICAgICAgICAgZGVlcFBhdGggPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWVwUGF0aCA9IGAke2RlZXBQYXRofSR7c2VwfSR7aW5kZXh9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQoXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUl0ZW1zUmVjdXJzaXZlKFxuICAgICAgICAgICAgICBpdGVtLmNvbXBvbmVudHMsXG4gICAgICAgICAgICAgIGZpZWxkc09jY3VyZW5jZXMsXG4gICAgICAgICAgICAgIGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgIGRlZXBQYXRoLFxuICAgICAgICAgICAgICBzZWN0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSk7XG4gIH1cbiAgcHJpdmF0ZSBnZXRGaWVsc09jY3VyZW5jZXMoaXRlbXM6IGFueVtdKSB7XG4gICAgY29uc3QgYWxsQ29tcG9uZW50cyA9IHRoaXMuZ2V0QWxsQ29tcG9uZW50cyhpdGVtcyk7XG4gICAgcmV0dXJuIGNvdW50QnkoYWxsQ29tcG9uZW50cywgJ25hbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsQ29tcG9uZW50cyhpdGVtczogYW55W10pIHtcbiAgICBjb25zdCBhbGxDb21wb25lbnRzID0gW107XG4gICAgaXRlbXMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRzKSB7XG4gICAgICAgIGFsbENvbXBvbmVudHMucHVzaCguLi50aGlzLmdldEFsbENvbXBvbmVudHMoY29tcG9uZW50LmNvbXBvbmVudHMpKTtcbiAgICAgIH1cbiAgICAgIGFsbENvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGxDb21wb25lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RXJyb3JNZXNzYWdlKHZhbGlkYXRvclJlc3VsdDogVmFsaWRhdG9yUmVzdWx0KTogc3RyaW5nIHtcbiAgICBjb25zdCByZXF1aXJlZFByb3BlcnRpZXNFcnJvcnMgPSB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLmZpbHRlcihcbiAgICAgIGVycm9yID0+IGVycm9yLm5hbWUgPT09ICdyZXF1aXJlZCdcbiAgICApO1xuICAgIGxldCByZXF1aXJlZE1lc3NhZ2UgPSAnJztcbiAgICBpZiAocmVxdWlyZWRQcm9wZXJ0aWVzRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcXVpcmVkTWVzc2FnZSA9IHJlcXVpcmVkUHJvcGVydGllc0Vycm9ycy5yZWR1Y2UoXG4gICAgICAgIChyZXF1aXJlZE1zZywgZXJyb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7cmVxdWlyZWRNc2d9IDxsaT4gJHtlcnJvci5hcmd1bWVudH0gPC9saT5gO1xuICAgICAgICB9LFxuICAgICAgICAnJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gJzxzcGFuPlRoZSBwcm9wZXJ0aWVzIGJlbG93IGFyZSByZXF1aXJlZCA6PC9zcGFuPic7XG4gICAgICByZXF1aXJlZE1lc3NhZ2UgPSByZXF1aXJlZE1lc3NhZ2VcbiAgICAgICAgPyB0aXRsZSArIGA8dWw+JHtyZXF1aXJlZE1lc3NhZ2V9PC91bD5gXG4gICAgICAgIDogJyc7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZFR5cGVFcnJvcnMgPSB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLmZpbHRlcihcbiAgICAgIGVycm9yID0+IGVycm9yLm5hbWUgPT09ICd0eXBlJ1xuICAgICk7XG4gICAgbGV0IGludmFsaWRUeXBlTWVzc2FnZSA9ICcnO1xuICAgIGlmIChpbnZhbGlkVHlwZUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBpbnZhbGlkVHlwZU1lc3NhZ2UgPSBpbnZhbGlkVHlwZUVycm9ycy5yZWR1Y2UoKGludmFsaWRNc2csIGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtpbnZhbGlkTXNnfSA8bGk+ICR7ZXJyb3IucHJvcGVydHkucmVwbGFjZSgnaW5zdGFuY2UuJywgJycpfSAke1xuICAgICAgICAgIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfWA7XG4gICAgICB9LCAnJyk7XG4gICAgICBjb25zdCB0aXRsZSA9ICc8c3Bhbj5UaGUgcHJvcGVydGllcyBiZWxvdyBoYXZlIGludmFsaWQgdHlwZSA6PC9zcGFuPic7XG4gICAgICBpbnZhbGlkVHlwZU1lc3NhZ2UgPSBpbnZhbGlkVHlwZU1lc3NhZ2VcbiAgICAgICAgPyB0aXRsZSArIGA8dWw+JHtpbnZhbGlkVHlwZU1lc3NhZ2V9PC91bD5gXG4gICAgICAgIDogJyc7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZEVudW1WYWx1ZXNFcnJvcnMgPSB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLmZpbHRlcihcbiAgICAgIGVycm9yID0+IGVycm9yLm5hbWUgPT09ICdlbnVtJ1xuICAgICk7XG4gICAgbGV0IGludmFsaWRFbnVtVmFsdWVzTWVzc2FnZSA9ICcnO1xuICAgIGlmIChpbnZhbGlkRW51bVZhbHVlc0Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBpbnZhbGlkRW51bVZhbHVlc01lc3NhZ2UgPSBpbnZhbGlkRW51bVZhbHVlc0Vycm9ycy5yZWR1Y2UoXG4gICAgICAgIChpbnZhbGlkVmFsdWVFbnVtLCBlcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtpbnZhbGlkVmFsdWVFbnVtfSA8bGk+ICR7ZXJyb3IucHJvcGVydHkucmVwbGFjZShcbiAgICAgICAgICAgICdpbnN0YW5jZS4nLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApfSAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgfSxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgICc8c3Bhbj5UaGUgcHJvcGVydGllcyBiZWxvdyBoYXZlIGludmFsaWQgdmFsdWUgc2VsZWN0ZWQgOjwvc3Bhbj4nO1xuICAgICAgaW52YWxpZEVudW1WYWx1ZXNNZXNzYWdlID0gaW52YWxpZEVudW1WYWx1ZXNNZXNzYWdlXG4gICAgICAgID8gdGl0bGUgKyBgPHVsPiR7aW52YWxpZEVudW1WYWx1ZXNNZXNzYWdlfTwvdWw+YFxuICAgICAgICA6ICcnO1xuICAgIH1cbiAgICBjb25zdCBpbnZhbGlkSXRlbU5hbWUgPSB2YWxpZGF0b3JSZXN1bHQuZXJyb3JzLmZpbHRlcihcbiAgICAgIGVycm9yID0+IGVycm9yLm5hbWUgPT09ICd1bmlxdWUnXG4gICAgKTtcbiAgICBjb25zdCBpbnZhbGlkSXRlbU5hbWVNZXNzYWdlID1cbiAgICAgIGludmFsaWRJdGVtTmFtZS5sZW5ndGggPiAwID8gJzxzcGFuPkR1cGxpY2F0ZWQgbmFtZTwvc3Bhbj48YnIvPicgOiAnJztcbiAgICByZXR1cm4gYCR7aW52YWxpZEl0ZW1OYW1lTWVzc2FnZX0ke3JlcXVpcmVkTWVzc2FnZX0ke2ludmFsaWRUeXBlTWVzc2FnZX0ke2ludmFsaWRFbnVtVmFsdWVzTWVzc2FnZX1gO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluZm8ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG59XG4iXX0=