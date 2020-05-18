import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogService, Dialog } from '../../../../../core';
import { ScreenTemplate } from '../../../../../models/screens-library';
import { ScreensLibrairiesState } from '../../../../../core/ngrx/screens-librairies';
import { ModelsState } from '../../../../../core/ngrx/models';
export declare class FeatureUpdatorComponent extends Dialog implements OnInit {
    private dialogService;
    private screensLibrairiesManagement;
    private modelsManagementStore;
    featureName: string;
    featureScreensState$: Observable<any>;
    screensInTrashCount$: Observable<number>;
    disableApplyButton$: Observable<boolean>;
    templates$: Observable<ScreenTemplate[]>;
    models$: Observable<any[]>;
    title: string;
    screensCount$: {
        [key: string]: Observable<string>;
    };
    setOptions(options: {
        featureName: string;
    }): void;
    constructor(dialogService: DialogService, screensLibrairiesManagement: Store<ScreensLibrairiesState>, modelsManagementStore: Store<ModelsState>);
    ngOnInit(): void;
    /**
     * sections may have nested sections
     * @param screen the screen to delete
     */
    /**
     * sections may have nested sections
     * @param screen the screen to cancel
     */
    /**
     * sections may have nested sections
     * @param screenNode the screen node
     */
    /**
     * Add the 'invalid-screen-name' class name to cells having invalid input text
     * @param name the screen name
     * @param inputRef inputReference of the input text
     * @returns boolean
     */
    /**
     * enabale or disable the Apply button
     */
    disableApplyButton(): Observable<boolean>;
}
