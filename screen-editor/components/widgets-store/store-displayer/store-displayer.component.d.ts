import { SimpleChanges, OnChanges } from '@angular/core';
import { TreeDragDropService } from 'primeng/api';
import { UiComponent, WidgetsLibraryModel, Category } from '../../../models';
import { UuidService } from '../../../core';
export declare class StoreDisplayerComponent implements OnChanges {
    private treeDragDropService;
    private uuidService;
    store: WidgetsLibraryModel;
    mask: boolean;
    screen: string;
    categories: Category[];
    components: UiComponent[];
    constructor(treeDragDropService: TreeDragDropService, uuidService: UuidService);
    /**
     * Init the component treeNode
     * when start dragging
     * @param component - Component
     */
    ngOnChanges(changes: SimpleChanges): void;
    startDragComponent(component: UiComponent): void;
    private initDraggableComponentNode;
    /**
     * Build component node that have default content.
     */
    buildNodeTree(content: any, allComponent: any): any;
    private addDefaultChilds;
    private addComponentMetaData;
    private filterComponents;
    private isScreenAllowed;
}
