import { OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feature, Entity } from '@palmyra-devkit/core-api/shared';
import { Dialog } from '../../../../../core/dialog/dialog';
import { FeatureUpdatorComponent } from '../feature-updator/feature-updator.component';
import { ModelsState } from '../../../../../core/ngrx/models';
export declare class FeatureSelectorComponent extends Dialog implements OnInit, AfterViewInit {
    private modelsManagementStore;
    feature: any;
    updator: FeatureUpdatorComponent;
    models$: Observable<Entity[]>;
    features$: Observable<Feature[]>;
    options: {};
    selectedFeature: Entity;
    constructor(modelsManagementStore: Store<ModelsState>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectFeature(): void;
}
