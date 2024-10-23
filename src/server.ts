import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { DecisionTreeService } from './DecisionTreeService';

const app = express();
const port = 3000;
app.use(bodyParser.json());


app.post('/execute-tree', (req: Request, res: Response) => {
    const decisionTreeJson = req.body;

    try {
        const decisionTreeService = DecisionTreeService.fromJson(JSON.stringify(decisionTreeJson));
        decisionTreeService.executeTree();
        res.status(200).send('Decision tree executed successfully.');
    } catch (error) {
        console.error('Error executing decision tree:', error);
        res.status(400).send('Invalid decision tree JSON.');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
