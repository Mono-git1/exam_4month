import express from 'express';
import teacherController from '../../controllers/TeacherController.js';
import validate from '../../utils/validate.js';
import { createTeacherValidation, updateTeacherValidation } from '../../validators/teacherValidator.js';

const router = express.Router();

router
    .route('/')
    .post(validate(createTeacherValidation), teacherController.create)
    .get(teacherController.getAll);

router
    .route('/:id')
    .get(teacherController.getById)
    .put(validate(updateTeacherValidation), teacherController.updateById)
    .delete(teacherController.deleteById);

export default router;