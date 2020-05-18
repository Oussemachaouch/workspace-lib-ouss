import { Navigator } from './navigator/navigator';
export declare class ExplorerComponent {
    navigator: Navigator;
    constructor(navigator: Navigator);
    /**
     * Used to filter tree nodes.
     * @param event - dom event.
     */
    filter(query: string): void;
}
