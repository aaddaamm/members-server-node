import { Express } from "express";
import user from './routes/user';

export function importApiRoutes(app: Express) {
    app.use('/api/user', user);

    return app;
}
