import { Actions } from '@ngrx/effects';
import { WidgetsLibrairiesAPIService } from '../../services/api';
export declare class WidgetsLibrairiesEffects {
    private actions$;
    private widgetsLibrariesApi;
    constructor(actions$: Actions, widgetsLibrariesApi: WidgetsLibrairiesAPIService);
    loadWidgetsLibraries$: import("rxjs").Observable<{
        widgetsLibrairies: import("../../../models").WidgetsLibraryModel[];
    } & import("@ngrx/store/src/models").TypedAction<"[SE - Widgets Libraries] Load Widgets Libraries Successfully">> & import("@ngrx/effects").CreateEffectMetadata;
}
