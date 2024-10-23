import { Action } from './Action';

export class SendEmail implements Action {
    constructor(private sender: string, private receiver: string) {}

    execute() {
        console.log(`Send Email from ${this.sender} to ${this.receiver}`);
    }
}
