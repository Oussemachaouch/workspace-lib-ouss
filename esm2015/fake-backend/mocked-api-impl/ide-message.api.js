/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
export class IDEMessageService extends IdeMessageService {
    /**
     * @param {?} message
     * @return {?}
     */
    pushSuccess(message) {
        console.log('Success : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushError(message) {
        console.log('Error : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushInfo(message) {
        console.log('Info : ' + message.detail);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    pushWarning(message) {
        console.log('Warning : ' + message.detail);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLW1lc3NhZ2UuYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsiZmFrZS1iYWNrZW5kL21vY2tlZC1hcGktaW1wbC9pZGUtbWVzc2FnZS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFFbEIsTUFBTSwwQ0FBMEMsQ0FBQztBQUVsRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsaUJBQWlCOzs7OztJQUN0RCxXQUFXLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBQ0QsU0FBUyxDQUFDLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUNELFFBQVEsQ0FBQyxPQUFnQjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElkZU1lc3NhZ2VTZXJ2aWNlLFxuICBNZXNzYWdlXG59IGZyb20gJ0BwYWxteXJhLWRldmtpdC9jb3JlLWFwaS9jbGllbnQvbWVzc2FnZXMnO1xuXG5leHBvcnQgY2xhc3MgSURFTWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBJZGVNZXNzYWdlU2VydmljZSB7XG4gIHB1c2hTdWNjZXNzKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzcyA6ICcgKyBtZXNzYWdlLmRldGFpbCk7XG4gIH1cbiAgcHVzaEVycm9yKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnRXJyb3IgOiAnICsgbWVzc2FnZS5kZXRhaWwpO1xuICB9XG4gIHB1c2hJbmZvKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnSW5mbyA6ICcgKyBtZXNzYWdlLmRldGFpbCk7XG4gIH1cbiAgcHVzaFdhcm5pbmcobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdXYXJuaW5nIDogJyArIG1lc3NhZ2UuZGV0YWlsKTtcbiAgfVxufVxuIl19