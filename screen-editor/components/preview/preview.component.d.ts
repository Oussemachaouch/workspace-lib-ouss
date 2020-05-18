import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Device } from '../../models/device';
export declare class PreviewComponent implements OnInit, OnDestroy {
    device: Device;
    landscapeMode: boolean;
    desktopWidth: string;
    iframe: ElementRef;
    previewerUrl: any;
    private iframeLoaded$;
    private unsubscribe;
    widgetsModules: any[];
    themeUrl: string;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
