import express from 'express';
import courseController from '../../controllers/CourseController.js';
import validate from '../../utils/validate.js';
import { createCourseValidation, updateCourseValidation } from '../../validators/courseValidator.js';

const router = express.Router();

router
    .route('/')
    .post(validate(createCourseValidation), courseController.create)
    .get(courseController.getAll);

router
    .route('/:id')
    .get(courseController.getById)
    .put(validate(updateCourseValidation), courseController.updateById)
    .delete(courseController.deleteById);

export default router;