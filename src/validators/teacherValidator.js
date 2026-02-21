import { body } from 'express-validator';

export const createTeacherValidation = [
    body('fullName').isString().withMessage('Full name must be a string').notEmpty().withMessage('Full name is required'),
    body('phone').isString().withMessage('Phone must be a string').notEmpty().withMessage('Phone is required'),
    body('specialty').isString().withMessage('Specialty must be a string').notEmpty().withMessage('Specialty is required')
];

export const updateTeacherValidation = [
    body('fullName').optional().isString().withMessage('Full name must be a string'),
    body('phone').optional().isString().withMessage('Phone must be a string'),
    body('specialty').optional().isString().withMessage('Specialty must be a string')
];