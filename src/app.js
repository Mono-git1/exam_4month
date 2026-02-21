import express from 'express';

import { errorConverter, errorHandler } from './utils/errorManager.js';

import ApiError from './utils/ApiError.js';

import v1Routes from './routes/v1/index.js';
const app = express();

app.use(express.json());

app.use('/api/v1', v1Routes);

app.use((req, res, next) => {
    next(new ApiError(404, 'API Not found'));
});
app.use(errorConverter);
app.use(errorHandler);
export default app;
