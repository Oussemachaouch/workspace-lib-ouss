import { WidgetsLibraryModel } from '../../../models/widgets-library';
export declare const LOAD_WIDEGTS_LIBRAIRIES: import("@ngrx/store").ActionCreator<"[SE - Widgets Libraries] Load Widgets Libraries", () => import("@ngrx/store/src/models").TypedAction<"[SE - Widgets Libraries] Load Widgets Libraries">>;
export declare const LOAD_WIDEGTS_LIBRAIRIES_SUCCESSFULLY: import("@ngrx/store").ActionCreator<"[SE - Widgets Libraries] Load Widgets Libraries Successfully", (props: {
    widgetsLibrairies: WidgetsLibraryModel[];
}) => {
    widgetsLibrairies: WidgetsLibraryModel[];
} & import("@ngrx/store/src/models").TypedAction<"[SE - Widgets Libraries] Load Widgets Libraries Successfully">>;
export declare const LOAD_WIDEGTS_LIBRAIRIES_FAILED: import("@ngrx/store").ActionCreator<"[SE - Widgets Libraries] Load Widgets Libraries Failed", (props: {
    err: any;
}) => {
    err: any;
} & import("@ngrx/store/src/models").TypedAction<"[SE - Widgets Libraries] Load Widgets Libraries Failed">>;
