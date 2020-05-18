import { OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
export declare class GlobalLayoutComponent implements OnInit {
    private layoutService;
    leftCollapsed: boolean;
    rightCollapsed: boolean;
    ucPolicyActive: boolean;
    constructor(layoutService: LayoutService);
    ngOnInit(): void;
    /**
     * Collapse/Expand the left container
     *
     */
    collapseLeft(): void;
    /**
     * Collapse/Expand the right container
     *
     */
    collapseRight(): void;
}
