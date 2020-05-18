import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IdeActionsService } from '@palmyra-devkit/core-api/client';
export declare class FeatureExplorerToolbarComponent implements OnInit, OnDestroy {
    private ideActionsSevice;
    filter: EventEmitter<string>;
    addFeature: EventEmitter<any>;
    saveFeatures: EventEmitter<any>;
    deletedScreens$: Observable<number>;
    deletedFeatureCount$: Observable<number>;
    unsubscribe$: Subject<{}>;
    constructor(ideActionsSevice: IdeActionsService);
    ngOnInit(): void;
    /**
     * Used to filter tree nodes.
     * @param event - dom event.
     */
    doFilter(query: string): void;
    openAddFeatureDialog(): void;
    doSaveFeatures(): void;
    /**
     * Save using keybord shortcut
     * Ctrt + s
     * @param event key board event
     */
    moveNodeWithKeys(event: KeyboardEvent): void;
    ngOnDestroy(): void;
}
