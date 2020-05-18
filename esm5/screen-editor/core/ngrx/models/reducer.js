/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_MODELS, LOAD_MODELS_SUCCESSFULLY } from './actions';
var ModelsState = /** @class */ (function () {
    function ModelsState(entities) {
        this.entities = entities;
    }
    return ModelsState;
}());
export { ModelsState };
if (false) {
    /** @type {?} */
    ModelsState.prototype.entities;
}
/** @type {?} */
export var initialState = new ModelsState();
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return (tslib_1.__assign({}, state)); }, ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
function (state, _a) {
    var entities = _a.entities;
    return new ModelsState(entities);
};
/** @type {?} */
var modelsReducer = createReducer(initialState, on(LOAD_MODELS, (ɵ0)), on(LOAD_MODELS_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function reducer(state, action) {
    return modelsReducer(state, action);
}
/** @type {?} */
export var getModelsState = createFeatureSelector('SE - Models');
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities || []; };
/** @type {?} */
export var getAllModels = createSelector(getModelsState, (ɵ2));
var ɵ3 = /**
 * @param {?} entities
 * @param {?} __1
 * @return {?}
 */
function (entities, _a) {
    var entityName = _a.entityName;
    if (entityName) {
        /** @type {?} */
        var model = entities.find((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) { return entity.name.toLowerCase() === entityName.toLowerCase(); }));
        if (model) {
            model = attachRelationShipsToModel(model, entities);
        }
        return model;
    }
    return undefined;
};
/** @type {?} */
export var getModel = createSelector(getAllModels, (ɵ3));
/** @type {?} */
export var key = 'SE - Models';
// private
// ToDo need to handle infinite loop in case of circular dependency
/**
 * @param {?} entity
 * @param {?} allEntities
 * @return {?}
 */
export function attachRelationShipsToModel(entity, allEntities) {
    entity.relationships.forEach((/**
     * @param {?} relationship
     * @return {?}
     */
    function (relationship) {
        if (!relationship.entity) {
            relationship.entity = allEntities.find((/**
             * @param {?} relationType
             * @return {?}
             */
            function (relationType) {
                return relationType.name.toLowerCase() === relationship.type.toLowerCase();
            }));
            if (relationship.entity && relationship.entity.relationships) {
                relationship.entity = attachRelationShipsToModel(relationship.entity, allEntities);
            }
        }
    }));
    return entity;
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L21vZGVscy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixFQUFFLEVBQ0YscUJBQXFCLEVBQ3JCLGNBQWMsRUFDZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxFO0lBQ0UscUJBQVksUUFBbUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFEQywrQkFBbUI7OztBQUdyQixNQUFNLEtBQU8sWUFBWSxHQUFHLElBQUksV0FBVyxFQUFFOzs7OztBQUkzQixVQUFBLEtBQUssSUFBSSxPQUFBLHNCQUFNLEtBQUssRUFBRyxFQUFkLENBQWM7Ozs7O0FBR3JDLFVBQUMsS0FBSyxFQUFFLEVBQVk7UUFBVixzQkFBUTtJQUFPLE9BQUEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQXpCLENBQXlCOztJQUxoRCxhQUFhLEdBQUcsYUFBYSxDQUNqQyxZQUFZLEVBQ1osRUFBRSxDQUFDLFdBQVcsT0FBMEIsRUFDeEMsRUFBRSxDQUNBLHdCQUF3QixPQUV6QixDQUNGOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWtCLEVBQUUsTUFBTTtJQUNoRCxPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sY0FBYyxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQzs7Ozs7QUFHaEUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQXBCLENBQW9COztBQUY5QyxNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWMsQ0FDeEMsY0FBYyxPQUVmOzs7Ozs7QUFHQyxVQUFDLFFBQVEsRUFBRSxFQUFjO1FBQVosMEJBQVU7SUFDckIsSUFBSSxVQUFVLEVBQUU7O1lBQ1YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQ3ZCLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQXRELENBQXNELEVBQ2pFO1FBQ0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLEdBQUcsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7O0FBYkgsTUFBTSxLQUFPLFFBQVEsR0FBRyxjQUFjLENBQ3BDLFlBQVksT0FhYjs7QUFFRCxNQUFNLEtBQU8sR0FBRyxHQUFHLGFBQWE7Ozs7Ozs7O0FBS2hDLE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsTUFBYyxFQUNkLFdBQXFCO0lBRXJCLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsWUFBWTtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUN4QixZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQ3BDLFVBQUEsWUFBWTtnQkFDVixPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFBbkUsQ0FBbUUsRUFDdEUsQ0FBQztZQUNGLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDNUQsWUFBWSxDQUFDLE1BQU0sR0FBRywwQkFBMEIsQ0FDOUMsWUFBWSxDQUFDLE1BQU0sRUFDbkIsV0FBVyxDQUNaLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlUmVkdWNlcixcbiAgb24sXG4gIGNyZWF0ZUZlYXR1cmVTZWxlY3RvcixcbiAgY3JlYXRlU2VsZWN0b3Jcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAcGFsbXlyYS1kZXZraXQvY29yZS1hcGkvc2hhcmVkJztcbmltcG9ydCB7IExPQURfTU9ERUxTLCBMT0FEX01PREVMU19TVUNDRVNTRlVMTFkgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxzU3RhdGUge1xuICBjb25zdHJ1Y3RvcihlbnRpdGllcz86IEVudGl0eVtdKSB7XG4gICAgdGhpcy5lbnRpdGllcyA9IGVudGl0aWVzO1xuICB9XG4gIGVudGl0aWVzOiBFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IG5ldyBNb2RlbHNTdGF0ZSgpO1xuXG5jb25zdCBtb2RlbHNSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihcbiAgaW5pdGlhbFN0YXRlLFxuICBvbihMT0FEX01PREVMUywgc3RhdGUgPT4gKHsgLi4uc3RhdGUgfSkpLFxuICBvbihcbiAgICBMT0FEX01PREVMU19TVUNDRVNTRlVMTFksXG4gICAgKHN0YXRlLCB7IGVudGl0aWVzIH0pID0+IG5ldyBNb2RlbHNTdGF0ZShlbnRpdGllcylcbiAgKVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IE1vZGVsc1N0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIG1vZGVsc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb2RlbHNTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcignU0UgLSBNb2RlbHMnKTtcbmV4cG9ydCBjb25zdCBnZXRBbGxNb2RlbHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TW9kZWxzU3RhdGUsXG4gIChzdGF0ZTogTW9kZWxzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzIHx8IFtdXG4pO1xuZXhwb3J0IGNvbnN0IGdldE1vZGVsID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFsbE1vZGVscyxcbiAgKGVudGl0aWVzLCB7IGVudGl0eU5hbWUgfSkgPT4ge1xuICAgIGlmIChlbnRpdHlOYW1lKSB7XG4gICAgICBsZXQgbW9kZWwgPSBlbnRpdGllcy5maW5kKFxuICAgICAgICBlbnRpdHkgPT4gZW50aXR5Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZW50aXR5TmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG1vZGVsID0gYXR0YWNoUmVsYXRpb25TaGlwc1RvTW9kZWwobW9kZWwsIGVudGl0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGtleSA9ICdTRSAtIE1vZGVscyc7XG5cbi8vIHByaXZhdGVcblxuLy8gVG9EbyBuZWVkIHRvIGhhbmRsZSBpbmZpbml0ZSBsb29wIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jeVxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFJlbGF0aW9uU2hpcHNUb01vZGVsKFxuICBlbnRpdHk6IEVudGl0eSxcbiAgYWxsRW50aXRpZXM6IEVudGl0eVtdXG4pOiBFbnRpdHkge1xuICBlbnRpdHkucmVsYXRpb25zaGlwcy5mb3JFYWNoKHJlbGF0aW9uc2hpcCA9PiB7XG4gICAgaWYgKCFyZWxhdGlvbnNoaXAuZW50aXR5KSB7XG4gICAgICByZWxhdGlvbnNoaXAuZW50aXR5ID0gYWxsRW50aXRpZXMuZmluZChcbiAgICAgICAgcmVsYXRpb25UeXBlID0+XG4gICAgICAgICAgcmVsYXRpb25UeXBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcmVsYXRpb25zaGlwLnR5cGUudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGlmIChyZWxhdGlvbnNoaXAuZW50aXR5ICYmIHJlbGF0aW9uc2hpcC5lbnRpdHkucmVsYXRpb25zaGlwcykge1xuICAgICAgICByZWxhdGlvbnNoaXAuZW50aXR5ID0gYXR0YWNoUmVsYXRpb25TaGlwc1RvTW9kZWwoXG4gICAgICAgICAgcmVsYXRpb25zaGlwLmVudGl0eSxcbiAgICAgICAgICBhbGxFbnRpdGllc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0eTtcbn1cbiJdfQ==