import path from 'path';
import express, { Express } from 'express';
import expressNunjucks from 'express-nunjucks';
import { setupRoutes } from '../routes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '..', 'views'));
expressNunjucks(app);

setupRoutes(app);

export const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

export default app;