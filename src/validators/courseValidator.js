import { body } from 'express-validator';

export const createCourseValidation = [
    body('title').isString().withMessage('Title must be a string').notEmpty().withMessage('Title is required'),
    body('price').isNumeric().withMessage('Price must be numeric').notEmpty().withMessage('Price is required'),
    body('duration').isNumeric().withMessage('Duration must be numeric').notEmpty().withMessage('Duration is required')
];

export const updateCourseValidation = [
    body('title').optional().isString().withMessage('Title must be a string'),
    body('price').optional().isNumeric().withMessage('Price must be numeric'),
    body('duration').optional().isNumeric().withMessage('Duration must be numeric')
];