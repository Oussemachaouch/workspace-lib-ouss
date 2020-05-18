import { Observable } from 'rxjs';
import { TreeDragDropService } from 'primeng/api';
import { UiTreeNode } from '../../../models/tree-node';
export declare class DndService {
    dragDropService: TreeDragDropService;
    private dragStartInfo;
    constructor(dragDropService: TreeDragDropService);
    getDroppedNode(): Observable<any>;
    /**
     * apply the tree dnd rules
     * @param dropNode - node to trop inside.
     * @param dragNode - node dragged from the widget store.
     */
    isDropNotAllowed(dropNode: UiTreeNode, dragNode: UiTreeNode): any;
    private getSelectionPath;
    private _addRemovedNode;
}
