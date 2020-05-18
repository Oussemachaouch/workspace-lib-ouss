import { EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Screen } from '@palmyra-devkit/core-api/shared';
import { Navigator } from '../navigator/navigator';
import { LayoutService } from '../../../core/services/layout.service';
export declare class ExplorerToolbarComponent implements OnInit {
    private navigator;
    private layoutService;
    query: EventEmitter<string>;
    screenSaved: EventEmitter<Screen>;
    view$: Observable<string>;
    constructor(navigator: Navigator, layoutService: LayoutService);
    ngOnInit(): void;
    openFeatureSelector(): void;
    doSaveFeatures(): void;
    doFilter(query: string): void;
}
