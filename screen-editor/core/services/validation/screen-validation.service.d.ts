import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Screen } from '@palmyra-devkit/core-api/shared';
import { WidgetsLibrairiesState } from '../../ngrx/widgets-librairies';
import { ScreensLibrairiesState } from '../../ngrx/screens-librairies';
export declare class ScreenValidationService {
    private widgetsLibrairiesManagement;
    private screensLibrairiesManagement;
    constructor(widgetsLibrairiesManagement: Store<WidgetsLibrairiesState>, screensLibrairiesManagement: Store<ScreensLibrairiesState>);
    validateScreensNames(screensNames: {
        displayed: string;
        name: string;
    }[]): {
        [key: string]: {
            error: string;
        };
    };
    validateScreenName(screenName: string): boolean;
    validateSchema(screen: Screen): Observable<ValidationInfo[]>;
    private _validateScreenSectionsRecursive;
    private _validateItemsRecursive;
    private getFielsOccurences;
    private getAllComponents;
    private _getErrorMessage;
}
export interface ValidationInfo {
    message: string;
    path?: string;
}
