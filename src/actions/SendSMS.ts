import { Action } from './Action';

export class SendSMS implements Action {
    constructor(private phoneNumber: string) {}

    execute() {
        console.log(`Send SMS to ${this.phoneNumber}`);
    }
}
