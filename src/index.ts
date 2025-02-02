import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
