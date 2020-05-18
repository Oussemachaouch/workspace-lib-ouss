import { OnInit, EventEmitter } from '@angular/core';
import { Dialog } from '../../../../../core';
import { NgForm } from '@angular/forms';
export declare class FeatureCreatorComponent extends Dialog implements OnInit {
    featureAdded: EventEmitter<string>;
    features: any;
    feature: string;
    constructor();
    ngOnInit(): void;
    submit(form: NgForm): void;
}
