import { body } from 'express-validator';

export const createPaymentValidation = [
    body('student').isMongoId().withMessage('Student ID must be valid').notEmpty().withMessage('Student ID is required'),
    body('amount').isNumeric().withMessage('Amount must be numeric').notEmpty().withMessage('Amount is required'),
    body('date').optional().isISO8601().toDate().withMessage('Date must be valid')
];

export const updatePaymentValidation = [
    body('student').optional().isMongoId().withMessage('Student ID must be valid'),
    body('amount').optional().isNumeric().withMessage('Amount must be numeric'),
    body('date').optional().isISO8601().toDate().withMessage('Date must be valid')
];