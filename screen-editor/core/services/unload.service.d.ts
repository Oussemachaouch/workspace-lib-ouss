import { ValidationStore } from '../../core/store';
export declare class UnloadModuleService {
    private validationStore;
    constructor(validationStore: ValidationStore);
    unloadModules(): void;
}
