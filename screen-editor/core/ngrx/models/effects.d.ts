import { Actions } from '@ngrx/effects';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
export declare class ModelsEffects {
    private actions$;
    private modelsApi;
    constructor(actions$: Actions, modelsApi: WorkspaceClientApi);
    loadModels$: import("rxjs").Observable<({
        entities: import("@palmyra-devkit/core-api/shared").Entity[];
    } & import("@ngrx/store/src/models").TypedAction<"[SE Models] Load Models Successfully">) | ({
        err: any;
    } & import("@ngrx/store/src/models").TypedAction<"[SE Models] Load Models Failed">)> & import("@ngrx/effects").CreateEffectMetadata;
}
