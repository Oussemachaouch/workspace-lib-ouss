import { ElementRef, Renderer2 } from '@angular/core';
export declare class CachedSrcDirective {
    private elRef;
    private renderer;
    cachedSrc: string;
    constructor(elRef: ElementRef, renderer: Renderer2);
}
