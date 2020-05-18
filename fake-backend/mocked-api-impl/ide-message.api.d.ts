import { IdeMessageService, Message } from '@palmyra-devkit/core-api/client/messages';
export declare class IDEMessageService extends IdeMessageService {
    pushSuccess(message: Message): void;
    pushError(message: Message): void;
    pushInfo(message: Message): void;
    pushWarning(message: Message): void;
}
