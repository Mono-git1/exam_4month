import express from 'express';
import * as models from '../../schema/index.js';
import * as validators from '../../validators/index.js';
import BaseRepository from '../../repositories/BaseRepository.js';
import BaseService from '../../services/BaseService.js';
import BaseController from '../../controllers/BaseController.js';
const router = express.Router();
const setupCrudRoutes = (path, model, validator, populateOptions = '') => {
    const repo = new BaseRepository(model);
    const service = new BaseService(repo, model.modelName, populateOptions);
    const controller = new BaseController(service, model.modelName);
    const route = express.Router();
    route
        .route('/')
        .post(validator[`create${model.modelName}Validation`], controller.create)
        .get(controller.getAll);
    route
        .route('/:id')
        .get(controller.getById)
        .put(validator[`update${model.modelName}Validation`], controller.updateById)
        .delete(controller.deleteById);
    router.use(path, route);
};
setupCrudRoutes('/students', models.Student, validators.studentValidations, 'group');
setupCrudRoutes('/teachers', models.Teacher, validators.teacherValidations);
setupCrudRoutes('/courses', models.Course, validators.courseValidations);
setupCrudRoutes('/groups', models.Group, validators.groupValidations, ['course', 'teacher']);
setupCrudRoutes('/payments', models.Payment, validators.paymentValidations, 'student');
export default router;
