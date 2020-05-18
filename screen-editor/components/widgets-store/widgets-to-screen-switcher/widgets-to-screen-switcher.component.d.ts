import { OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { WidgetsToScreenSwitcherService } from './widgets-to-screen-switcher.service';
export declare class WidgetsToScreenSwitcherComponent implements OnInit {
    private switcher;
    collapseProperties: boolean;
    collapse: EventEmitter<any>;
    unsubscribe$: Subject<any>;
    switcherState: string;
    constructor(switcher: WidgetsToScreenSwitcherService);
    ngOnInit(): void;
    moveToComponents(): void;
    moveToScreens(): void;
    collapseComponents(): void;
}
