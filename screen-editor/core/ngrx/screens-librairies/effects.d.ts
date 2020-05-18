import { Actions } from '@ngrx/effects';
import { ScreensLibrairiesAPIService } from '../../services/api';
export declare class ScreensLibrairiesEffects {
    private actions$;
    private screensLibrariesApi;
    constructor(actions$: Actions, screensLibrariesApi: ScreensLibrairiesAPIService);
    loadWidgetsLibraries$: import("rxjs").Observable<{
        screensLibrairies: import("../../../models").ScreensLibraryModel[];
    } & import("@ngrx/store/src/models").TypedAction<"[SE - Screens Libraries] Load Screens Libraries Successfully">> & import("@ngrx/effects").CreateEffectMetadata;
}
