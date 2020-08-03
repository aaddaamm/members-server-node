import user from './routes/user.routes.js';

export function importApiRoutes(app) {
    app.use('/api/user', user);

    return app;
}
