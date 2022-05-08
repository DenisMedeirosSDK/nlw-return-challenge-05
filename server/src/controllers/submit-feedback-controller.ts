import { Request, Response } from 'express';
import Joi from 'joi';
import { NodemailerMailAdapter } from '../adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from '../repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from '../use-cases/submit-feedback-use-case';

const schema = Joi.object({
  type: Joi.string().required(),
  comment: Joi.string().required(),
  screenshot: Joi.string(),
});

export async function SubmitFeedbackController(
  request: Request,
  response: Response
) {
  const { type, comment, screenshot } = request.body;

  schema.validate({ type, comment, screenshot });

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const modemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    modemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({ type, comment, screenshot });

  return response.status(201).end();
}
