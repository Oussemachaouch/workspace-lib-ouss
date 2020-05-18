/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IdeMessageService } from '@palmyra-devkit/core-api/client/messages';
var IDEMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(IDEMessageService, _super);
    function IDEMessageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    IDEMessageService.prototype.pushSuccess = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log('Success : ' + message.detail);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    IDEMessageService.prototype.pushError = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log('Error : ' + message.detail);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    IDEMessageService.prototype.pushInfo = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log('Info : ' + message.detail);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    IDEMessageService.prototype.pushWarning = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log('Warning : ' + message.detail);
    };
    return IDEMessageService;
}(IdeMessageService));
export { IDEMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlLW1lc3NhZ2UuYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd29ya3NwYWNlLWxpYi1vdXNzLyIsInNvdXJjZXMiOlsiZmFrZS1iYWNrZW5kL21vY2tlZC1hcGktaW1wbC9pZGUtbWVzc2FnZS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBRWxCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQ7SUFBdUMsNkNBQWlCO0lBQXhEOztJQWFBLENBQUM7Ozs7O0lBWkMsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQWdCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUNELHFDQUFTOzs7O0lBQVQsVUFBVSxPQUFnQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFDRCxvQ0FBUTs7OztJQUFSLFVBQVMsT0FBZ0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBQ0QsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQWdCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBdUMsaUJBQWlCLEdBYXZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSWRlTWVzc2FnZVNlcnZpY2UsXG4gIE1lc3NhZ2Vcbn0gZnJvbSAnQHBhbG15cmEtZGV2a2l0L2NvcmUtYXBpL2NsaWVudC9tZXNzYWdlcyc7XG5cbmV4cG9ydCBjbGFzcyBJREVNZXNzYWdlU2VydmljZSBleHRlbmRzIElkZU1lc3NhZ2VTZXJ2aWNlIHtcbiAgcHVzaFN1Y2Nlc3MobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIDogJyArIG1lc3NhZ2UuZGV0YWlsKTtcbiAgfVxuICBwdXNoRXJyb3IobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdFcnJvciA6ICcgKyBtZXNzYWdlLmRldGFpbCk7XG4gIH1cbiAgcHVzaEluZm8obWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdJbmZvIDogJyArIG1lc3NhZ2UuZGV0YWlsKTtcbiAgfVxuICBwdXNoV2FybmluZyhtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ1dhcm5pbmcgOiAnICsgbWVzc2FnZS5kZXRhaWwpO1xuICB9XG59XG4iXX0=