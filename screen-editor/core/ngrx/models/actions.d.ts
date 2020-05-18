import { Entity } from '@palmyra-devkit/core-api/shared';
export declare const LOAD_MODELS: import("@ngrx/store").ActionCreator<"[SE Models] Load Models", () => import("@ngrx/store/src/models").TypedAction<"[SE Models] Load Models">>;
export declare const LOAD_MODELS_SUCCESSFULLY: import("@ngrx/store").ActionCreator<"[SE Models] Load Models Successfully", (props: {
    entities: Entity[];
}) => {
    entities: Entity[];
} & import("@ngrx/store/src/models").TypedAction<"[SE Models] Load Models Successfully">>;
export declare const LOAD_MODELS_FAILED: import("@ngrx/store").ActionCreator<"[SE Models] Load Models Failed", (props: {
    err: any;
}) => {
    err: any;
} & import("@ngrx/store/src/models").TypedAction<"[SE Models] Load Models Failed">>;
