import { Component, Type } from '@angular/core';
import { Observable } from 'rxjs';
export declare class DialogService {
    private shareWithReplay$;
    openDialog(content: any): void;
    closeDialog(): void;
    content(): Observable<{
        type: Type<Component>;
        data: any;
        title?: string;
    }>;
}
