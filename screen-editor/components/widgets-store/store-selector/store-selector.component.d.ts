import { EventEmitter } from '@angular/core';
import { WidgetsLibraryModel } from '../../../models';
export declare class StoreSelectorComponent {
    stores: WidgetsLibraryModel[];
    selectStore: EventEmitter<WidgetsLibraryModel>;
    select(event: any): void;
}
