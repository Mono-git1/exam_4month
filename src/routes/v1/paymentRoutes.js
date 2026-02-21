import express from 'express';
import paymentController from '../../controllers/PaymentController.js';
import validate from '../../utils/validate.js';
import { createPaymentValidation, updatePaymentValidation } from '../../validators/paymentValidator.js';

const router = express.Router();

router
    .route('/')
    .post(validate(createPaymentValidation), paymentController.create)
    .get(paymentController.getAll);

router
    .route('/:id')
    .get(paymentController.getById)
    .put(validate(updatePaymentValidation), paymentController.updateById)
    .delete(paymentController.deleteById);

export default router;