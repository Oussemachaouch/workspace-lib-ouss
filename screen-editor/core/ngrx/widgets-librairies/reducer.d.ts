import { WidgetsLibraryModel, UiComponent } from '../../../models';
export declare class WidgetsLibrairiesState {
    data: WidgetsLibraryModel[];
}
export declare const initialState: WidgetsLibrairiesState;
export declare function reducer(state: WidgetsLibrairiesState, action: any): WidgetsLibrairiesState;
export declare const getWidgetsLibrairiesState: import("@ngrx/store").MemoizedSelector<object, {}, import("@ngrx/store").DefaultProjectorFn<{}>>;
export declare const getWidgetsLibrairies: import("@ngrx/store").MemoizedSelector<object, WidgetsLibraryModel[], import("@ngrx/store").DefaultProjectorFn<WidgetsLibraryModel[]>>;
export declare const getAllWidgets: import("@ngrx/store").MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getAvailableWidgetsForGivenScreenType: import("@ngrx/store").MemoizedSelectorWithProps<object, any, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getWidgetsToAutoGenerateSection: import("@ngrx/store").MemoizedSelectorWithProps<object, any, UiComponent[], import("@ngrx/store").DefaultProjectorFn<UiComponent[]>>;
export declare const getAllLayoutsWidgets: import("@ngrx/store").MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getWidgetByName: import("@ngrx/store").MemoizedSelectorWithProps<object, any, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const key = "SE - Widgets Librairies";
