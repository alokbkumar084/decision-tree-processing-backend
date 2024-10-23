import { DecisionTreeNode } from './DecisionTreeNode';

export class DecisionTreeService {
    constructor(private decisionTree: DecisionTreeNode) {}

    executeTree() {
        this.decisionTree.execute();
    }

    static fromJson(json: string): DecisionTreeService {
        const tree = DecisionTreeNode.fromJson(JSON.parse(json));
        return new DecisionTreeService(tree);
    }
}
