import { Action } from './actions/Action';
import { SendSMS } from './actions/SendSMS';
import { SendEmail } from './actions/SendEmail';
import { Condition } from './actions/Condition';
import { Loop } from './actions/Loop';

export class DecisionTreeNode {
    constructor(public action: Action) {}

    execute() {
        this.action.execute();
    }

    static fromJson(json: any): DecisionTreeNode {
        switch (json.type) {
            case "SendSMS":
                return new DecisionTreeNode(new SendSMS(json.phoneNumber));
            case "SendEmail":
                return new DecisionTreeNode(
                    new SendEmail(json.sender, json.receiver)
                );
            case "Condition":
                
                const trueAction = json.trueAction
                    ? DecisionTreeNode.fromJson(json.trueAction)
                    : null;
                const falseAction = json.falseAction
                    ? DecisionTreeNode.fromJson(json.falseAction)
                    : null;
                return new DecisionTreeNode(
                    new Condition(
                        json.expression,
                        trueAction?.action ?? null,  
                        falseAction?.action ?? null 
                    )
                );
            case "Loop":
                const subtree = DecisionTreeNode.fromJson(json.subtree);
                return new DecisionTreeNode(new Loop(subtree.action, json.iterations));
            default:
                throw new Error("Unknown action type");
        }
    }
}
