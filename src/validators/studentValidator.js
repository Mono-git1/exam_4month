import { body } from 'express-validator';

export const createStudentValidation = [
    body('fullName').isString().withMessage('Full name must be a string').notEmpty().withMessage('Full name is required'),
    body('phone').isString().withMessage('Phone must be a string').notEmpty().withMessage('Phone is required'),
    body('age').isNumeric().withMessage('Age must be numeric').notEmpty().withMessage('Age is required').custom(value => {
        if (value < 10) throw new Error('Age must be at least 10');
        return true;
    }),
    body('group').optional().isMongoId().withMessage('Invalid group ID')
];

export const updateStudentValidation = [
    body('fullName').optional().isString().withMessage('Full name must be a string'),
    body('phone').optional().isString().withMessage('Phone must be a string'),
    body('age').optional().isNumeric().withMessage('Age must be numeric').custom(value => {
        if (value < 10) throw new Error('Age must be at least 10');
        return true;
    }),
    body('group').optional().isMongoId().withMessage('Invalid group ID')
];