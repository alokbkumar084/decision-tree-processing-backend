import { Action } from './Action';

export class Condition implements Action {
    constructor(
        private expression: string,
        private trueAction: Action | null,
        private falseAction: Action | null
    ) {}

    execute() {
        const result = eval(this.expression);
        if (result) {
            console.log(`Condition is true: ${this.expression}`);
            this.trueAction?.execute();
        } else {
            console.log(`Condition is false: ${this.expression}`);
            this.falseAction?.execute();
        }
    }
}
