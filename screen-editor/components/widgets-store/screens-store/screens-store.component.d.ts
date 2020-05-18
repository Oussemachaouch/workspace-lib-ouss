import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDragDropService } from 'primeng/api';
import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
import { Screen } from '@palmyra-devkit/core-api/shared';
export declare class ScreensStoreComponent implements OnInit {
    private workspaceService;
    private treeDragDropService;
    screens$: Observable<Array<any>>;
    selectedScreen: Screen;
    constructor(workspaceService: WorkspaceClientApi, treeDragDropService: TreeDragDropService);
    ngOnInit(): void;
    /**
     * Init the screen treeNode when start dragging
     * @param screen - Screen
     */
    startDragScreen(screen: Screen, event: any): void;
    /**
     * Init the screen node.
     * @param screen the screen
     */
    private initDraggableScreenNode;
}
