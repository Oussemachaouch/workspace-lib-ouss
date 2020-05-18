import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { UiTreeNode } from '../../../models/tree-node';
export declare class FeatureExplorerComponent implements OnInit {
    private confirmationService;
    featuresTreeNodes: UiTreeNode[];
    selectedNode: UiTreeNode;
    featuresTreeNodes$: Observable<UiTreeNode[]>;
    constructor(confirmationService: ConfirmationService);
    ngOnInit(): void;
}
