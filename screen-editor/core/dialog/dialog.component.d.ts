import { ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { DialogHostDirective } from './dialog-host/dialog-host.directive';
import { DialogService } from './dialog.service';
export declare class DialogComponent implements OnInit, OnDestroy {
    private dialogService;
    private componentFactoryResolver;
    dialogHost: DialogHostDirective;
    showDialog: boolean;
    title: string;
    private dialogService$;
    constructor(dialogService: DialogService, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    hideDialog(): void;
    ngOnDestroy(): void;
}
