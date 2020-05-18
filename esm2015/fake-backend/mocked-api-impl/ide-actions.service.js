/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IdeActionsService } from '@palmyra-devkit/core-api/client';
import { Injectable } from '@angular/core';
export class IdeActionsServiceImpl extends IdeActionsService {
    /**
     * @return {?}
     */
    doSave() {
        this.save$.next();
    }
    /**
     * @return {?}
     */
    save() {
        return this.save$.asObservable();
    }
}
IdeActionsServiceImpl.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLWFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvcmtzcGFjZS1saWItb3Vzcy8iLCJzb3VyY2VzIjpbImZha2UtYmFja2VuZC9tb2NrZWQtYXBpLWltcGwvaWRlLWFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsaUJBQWlCOzs7O0lBQzFELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQVBGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZGVBY3Rpb25zU2VydmljZSB9IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9jbGllbnQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWRlQWN0aW9uc1NlcnZpY2VJbXBsIGV4dGVuZHMgSWRlQWN0aW9uc1NlcnZpY2Uge1xuICBkb1NhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zYXZlJC5uZXh0KCk7XG4gIH1cbiAgc2F2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlJC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19