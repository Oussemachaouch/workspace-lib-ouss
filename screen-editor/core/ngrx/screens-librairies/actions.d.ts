import { ScreensLibraryModel } from '../../../models/screens-library';
export declare const LOAD_SCREENS_LIBRAIRIES: import("@ngrx/store").ActionCreator<"[SE - Screens Libraries] Load Screens Libraries", () => import("@ngrx/store/src/models").TypedAction<"[SE - Screens Libraries] Load Screens Libraries">>;
export declare const LOAD_SCREENS_LIBRAIRIES_SUCCESSFULLY: import("@ngrx/store").ActionCreator<"[SE - Screens Libraries] Load Screens Libraries Successfully", (props: {
    screensLibrairies: ScreensLibraryModel[];
}) => {
    screensLibrairies: ScreensLibraryModel[];
} & import("@ngrx/store/src/models").TypedAction<"[SE - Screens Libraries] Load Screens Libraries Successfully">>;
export declare const LOAD_SCREENS_LIBRAIRIES_FAILED: import("@ngrx/store").ActionCreator<"[SE - Screens Libraries] Load Screens Libraries Failed", (props: {
    err: any;
}) => {
    err: any;
} & import("@ngrx/store/src/models").TypedAction<"[SE - Screens Libraries] Load Screens Libraries Failed">>;
