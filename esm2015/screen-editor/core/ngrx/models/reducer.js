/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { LOAD_MODELS, LOAD_MODELS_SUCCESSFULLY } from './actions';
export class ModelsState {
    /**
     * @param {?=} entities
     */
    constructor(entities) {
        this.entities = entities;
    }
}
if (false) {
    /** @type {?} */
    ModelsState.prototype.entities;
}
/** @type {?} */
export const initialState = new ModelsState();
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => (Object.assign({}, state)), ɵ1 = /**
 * @param {?} state
 * @param {?} __1
 * @return {?}
 */
(state, { entities }) => new ModelsState(entities);
/** @type {?} */
const modelsReducer = createReducer(initialState, on(LOAD_MODELS, (ɵ0)), on(LOAD_MODELS_SUCCESSFULLY, (ɵ1)));
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
export function reducer(state, action) {
    return modelsReducer(state, action);
}
/** @type {?} */
export const getModelsState = createFeatureSelector('SE - Models');
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities || [];
/** @type {?} */
export const getAllModels = createSelector(getModelsState, (ɵ2));
const ɵ3 = /**
 * @param {?} entities
 * @param {?} __1
 * @return {?}
 */
(entities, { entityName }) => {
    if (entityName) {
        /** @type {?} */
        let model = entities.find((/**
         * @param {?} entity
         * @return {?}
         */
        entity => entity.name.toLowerCase() === entityName.toLowerCase()));
        if (model) {
            model = attachRelationShipsToModel(model, entities);
        }
        return model;
    }
    return undefined;
};
/** @type {?} */
export const getModel = createSelector(getAllModels, (ɵ3));
/** @type {?} */
export const key = 'SE - Models';
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
    relationship => {
        if (!relationship.entity) {
            relationship.entity = allEntities.find((/**
             * @param {?} relationType
             * @return {?}
             */
            relationType => relationType.name.toLowerCase() === relationship.type.toLowerCase()));
            if (relationship.entity && relationship.entity.relationships) {
                relationship.entity = attachRelationShipsToModel(relationship.entity, allEntities);
            }
        }
    }));
    return entity;
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbInNjcmVlbi1lZGl0b3IvY29yZS9uZ3J4L21vZGVscy9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLEVBQUUsRUFDRixxQkFBcUIsRUFDckIsY0FBYyxFQUNmLE1BQU0sYUFBYSxDQUFDO0FBR3JCLE9BQU8sRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBWSxRQUFtQjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBRUY7OztJQURDLCtCQUFtQjs7O0FBR3JCLE1BQU0sT0FBTyxZQUFZLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7O0FBSTNCLEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQU0sS0FBSyxFQUFHOzs7OztBQUdyQyxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7O01BTGhELGFBQWEsR0FBRyxhQUFhLENBQ2pDLFlBQVksRUFDWixFQUFFLENBQUMsV0FBVyxPQUEwQixFQUN4QyxFQUFFLENBQ0Esd0JBQXdCLE9BRXpCLENBQ0Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBa0IsRUFBRSxNQUFNO0lBQ2hELE9BQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDOztBQUVELE1BQU0sT0FBTyxjQUFjLEdBQUcscUJBQXFCLENBQUMsYUFBYSxDQUFDOzs7OztBQUdoRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTs7QUFGOUMsTUFBTSxPQUFPLFlBQVksR0FBRyxjQUFjLENBQ3hDLGNBQWMsT0FFZjs7Ozs7O0FBR0MsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFO0lBQzNCLElBQUksVUFBVSxFQUFFOztZQUNWLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSTs7OztRQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUNqRTtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxHQUFHLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOztBQWJILE1BQU0sT0FBTyxRQUFRLEdBQUcsY0FBYyxDQUNwQyxZQUFZLE9BYWI7O0FBRUQsTUFBTSxPQUFPLEdBQUcsR0FBRyxhQUFhOzs7Ozs7OztBQUtoQyxNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLE1BQWMsRUFDZCxXQUFxQjtJQUVyQixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7SUFBQyxZQUFZLENBQUMsRUFBRTtRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUN4QixZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJOzs7O1lBQ3BDLFlBQVksQ0FBQyxFQUFFLENBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUN0RSxDQUFDO1lBQ0YsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUM1RCxZQUFZLENBQUMsTUFBTSxHQUFHLDBCQUEwQixDQUM5QyxZQUFZLENBQUMsTUFBTSxFQUNuQixXQUFXLENBQ1osQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVSZWR1Y2VyLFxuICBvbixcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvclxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9zaGFyZWQnO1xuaW1wb3J0IHsgTE9BRF9NT0RFTFMsIExPQURfTU9ERUxTX1NVQ0NFU1NGVUxMWSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbHNTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGVudGl0aWVzPzogRW50aXR5W10pIHtcbiAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG4gIH1cbiAgZW50aXRpZXM6IEVudGl0eVtdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IE1vZGVsc1N0YXRlKCk7XG5cbmNvbnN0IG1vZGVsc1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKFxuICBpbml0aWFsU3RhdGUsXG4gIG9uKExPQURfTU9ERUxTLCBzdGF0ZSA9PiAoeyAuLi5zdGF0ZSB9KSksXG4gIG9uKFxuICAgIExPQURfTU9ERUxTX1NVQ0NFU1NGVUxMWSxcbiAgICAoc3RhdGUsIHsgZW50aXRpZXMgfSkgPT4gbmV3IE1vZGVsc1N0YXRlKGVudGl0aWVzKVxuICApXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogTW9kZWxzU3RhdGUsIGFjdGlvbikge1xuICByZXR1cm4gbW9kZWxzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vZGVsc1N0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yKCdTRSAtIE1vZGVscycpO1xuZXhwb3J0IGNvbnN0IGdldEFsbE1vZGVscyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRNb2RlbHNTdGF0ZSxcbiAgKHN0YXRlOiBNb2RlbHNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXMgfHwgW11cbik7XG5leHBvcnQgY29uc3QgZ2V0TW9kZWwgPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWxsTW9kZWxzLFxuICAoZW50aXRpZXMsIHsgZW50aXR5TmFtZSB9KSA9PiB7XG4gICAgaWYgKGVudGl0eU5hbWUpIHtcbiAgICAgIGxldCBtb2RlbCA9IGVudGl0aWVzLmZpbmQoXG4gICAgICAgIGVudGl0eSA9PiBlbnRpdHkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBlbnRpdHlOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWwgPSBhdHRhY2hSZWxhdGlvblNoaXBzVG9Nb2RlbChtb2RlbCwgZW50aXRpZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3Qga2V5ID0gJ1NFIC0gTW9kZWxzJztcblxuLy8gcHJpdmF0ZVxuXG4vLyBUb0RvIG5lZWQgdG8gaGFuZGxlIGluZmluaXRlIGxvb3AgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmN5XG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoUmVsYXRpb25TaGlwc1RvTW9kZWwoXG4gIGVudGl0eTogRW50aXR5LFxuICBhbGxFbnRpdGllczogRW50aXR5W11cbik6IEVudGl0eSB7XG4gIGVudGl0eS5yZWxhdGlvbnNoaXBzLmZvckVhY2gocmVsYXRpb25zaGlwID0+IHtcbiAgICBpZiAoIXJlbGF0aW9uc2hpcC5lbnRpdHkpIHtcbiAgICAgIHJlbGF0aW9uc2hpcC5lbnRpdHkgPSBhbGxFbnRpdGllcy5maW5kKFxuICAgICAgICByZWxhdGlvblR5cGUgPT5cbiAgICAgICAgICByZWxhdGlvblR5cGUubmFtZS50b0xvd2VyQ2FzZSgpID09PSByZWxhdGlvbnNoaXAudHlwZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgaWYgKHJlbGF0aW9uc2hpcC5lbnRpdHkgJiYgcmVsYXRpb25zaGlwLmVudGl0eS5yZWxhdGlvbnNoaXBzKSB7XG4gICAgICAgIHJlbGF0aW9uc2hpcC5lbnRpdHkgPSBhdHRhY2hSZWxhdGlvblNoaXBzVG9Nb2RlbChcbiAgICAgICAgICByZWxhdGlvbnNoaXAuZW50aXR5LFxuICAgICAgICAgIGFsbEVudGl0aWVzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXR5O1xufVxuIl19