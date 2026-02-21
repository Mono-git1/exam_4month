import express from 'express';
import studentController from '../../controllers/StudentController.js';
import validate from '../../utils/validate.js';
import { createStudentValidation, updateStudentValidation } from '../../validators/studentValidator.js';

const router = express.Router();

router
    .route('/')
    .post(validate(createStudentValidation), studentController.create)
    .get(studentController.getAll);

router
    .route('/:id')
    .get(studentController.getById)
    .put(validate(updateStudentValidation), studentController.updateById)
    .delete(studentController.deleteById);

export default router;