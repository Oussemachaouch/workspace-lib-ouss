import { Entity } from '@palmyra-devkit/core-api/shared';
export declare class ModelsState {
    constructor(entities?: Entity[]);
    entities: Entity[];
}
export declare const initialState: ModelsState;
export declare function reducer(state: ModelsState, action: any): ModelsState;
export declare const getModelsState: import("@ngrx/store").MemoizedSelector<object, {}, import("@ngrx/store").DefaultProjectorFn<{}>>;
export declare const getAllModels: import("@ngrx/store").MemoizedSelector<object, Entity[], import("@ngrx/store").DefaultProjectorFn<Entity[]>>;
export declare const getModel: import("@ngrx/store").MemoizedSelectorWithProps<object, any, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const key = "SE - Models";
export declare function attachRelationShipsToModel(entity: Entity, allEntities: Entity[]): Entity;
