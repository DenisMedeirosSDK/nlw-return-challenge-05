import { Router } from 'express';
import { SubmitFeedbackController } from './controllers/submit-feedback-controller';

export const routes = Router();

routes.post('/feedbacks', SubmitFeedbackController);
