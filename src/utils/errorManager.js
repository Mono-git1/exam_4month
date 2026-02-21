import mongoose from 'mongoose';
import ApiError from './ApiError.js';
import { errorResponse } from './responseHelper.js';
export const errorConverter = (err, _req, _res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode =
            error.statusCode || error instanceof mongoose.Error ? 400 : 500;
        const message = error.message || 'Internal Server Error';
        error = new ApiError(statusCode, message, false, err.stack);
    }
    next(error);
};
export const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (process.env.NODE_ENV === 'production' && !err.isOperational) {
        statusCode = 500;
        message = 'Internal Server Error';
    }
    res.locals.errorMessage = err.message;
    const response = {
        code: statusCode,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    };
    if (process.env.NODE_ENV === 'development') {
        console.error(err);
    }
    errorResponse(res, message, statusCode);
};
