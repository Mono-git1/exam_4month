import { body } from 'express-validator';

export const createGroupValidation = [
    body('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    body('course').isMongoId().withMessage('Course ID must be valid').notEmpty().withMessage('Course ID is required'),
    body('teacher').isMongoId().withMessage('Teacher ID must be valid').notEmpty().withMessage('Teacher ID is required'),
    body('startDate').isISO8601().toDate().withMessage('Start Date must be valid').notEmpty().withMessage('Start Date is required'),
    body('isActive').optional().isBoolean().withMessage('isActive must be boolean')
];

export const updateGroupValidation = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('course').optional().isMongoId().withMessage('Course ID must be valid'),
    body('teacher').optional().isMongoId().withMessage('Teacher ID must be valid'),
    body('startDate').optional().isISO8601().toDate().withMessage('Start Date must be valid'),
    body('isActive').optional().isBoolean().withMessage('isActive must be boolean')
];