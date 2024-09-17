import express, { Express } from 'express';
import { setupRoutes } from '../routes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

export const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

export default app;