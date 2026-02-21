import express from 'express';
import groupController from '../../controllers/GroupController.js';
import validate from '../../utils/validate.js';
import { createGroupValidation, updateGroupValidation } from '../../validators/groupValidator.js';

const router = express.Router();

router
    .route('/')
    .post(validate(createGroupValidation), groupController.create)
    .get(groupController.getAll);

router
    .route('/:id')
    .get(groupController.getById)
    .put(validate(updateGroupValidation), groupController.updateById)
    .delete(groupController.deleteById);

export default router;