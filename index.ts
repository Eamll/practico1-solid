import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "practico1-db",
    entities: [],
    synchronize: true,
    logging: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.get('/api/users', (req: Request, res: Response) => {
    // Placeholder for getting users
    res.json({ users: [] });
});

app.post('/api/users', (req: Request, res: Response) => {
    // Placeholder for creating a user
    res.status(201).json({ message: 'User created' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;