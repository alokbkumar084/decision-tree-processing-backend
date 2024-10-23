import { Action } from './Action';

export class Loop implements Action {
    constructor(private subtree: Action, private iterations: number) {}

    execute() {
        for (let i = 0; i < this.iterations; i++) {
            console.log(`Executing loop iteration ${i + 1}`);
            this.subtree.execute();
        }
    }
}
