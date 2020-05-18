import { Observable } from 'rxjs';
import { Dialog, ScreenValidationService, DialogService } from '../../../../../core';
export declare class ScreenClonerComponent extends Dialog {
    private screenValidation;
    private dialogService;
    screenName: string;
    private screenToClone;
    private featureName;
    setOptions(options: {
        featureName: string;
        screenName: string;
    }): void;
    constructor(screenValidation: ScreenValidationService, dialogService: DialogService);
    apply(): void;
    cancel(): void;
    disableApplyButton(): boolean;
    inValidScreen(): Observable<string>;
}
