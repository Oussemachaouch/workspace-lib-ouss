import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
export declare class ToolbarFinderComponent implements OnInit, OnDestroy {
    private filterInput$;
    private subscription;
    filter: EventEmitter<string>;
    placeHolder: string;
    ngOnInit(): void;
    doFilter(event: KeyboardEvent): void;
    ngOnDestroy(): void;
}
