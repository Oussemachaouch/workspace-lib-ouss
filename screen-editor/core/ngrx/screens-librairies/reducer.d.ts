import { ScreensLibraryModel } from '../../../models';
export declare class ScreensLibrairiesState {
    data: ScreensLibraryModel[];
}
export declare const initialState: ScreensLibrairiesState;
export declare function reducer(state: ScreensLibrairiesState, action: any): ScreensLibrairiesState;
export declare const getScreenssLibrairiesState: import("@ngrx/store").MemoizedSelector<object, {}, import("@ngrx/store").DefaultProjectorFn<{}>>;
export declare const getScreensLibrairies: import("@ngrx/store").MemoizedSelector<object, ScreensLibraryModel[], import("@ngrx/store").DefaultProjectorFn<ScreensLibraryModel[]>>;
export declare const getAllScreens: import("@ngrx/store").MemoizedSelector<object, any[], import("@ngrx/store").DefaultProjectorFn<any[]>>;
export declare const getScreensTemplateForGivenScreens: import("@ngrx/store").MemoizedSelectorWithProps<object, any, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getScreenTemplate: import("@ngrx/store").MemoizedSelectorWithProps<object, any, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const key = "SE - Screens Librairies";
