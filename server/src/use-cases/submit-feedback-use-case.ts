import path from 'node:path';
import { MailAdapter } from '../adapters/mail-adapter';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

interface Request {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbackRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute({ comment, type, screenshot }: Request): Promise<void> {
    if (!type) {
      throw new Error('Type is required');
    }

    if (!comment) {
      throw new Error('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64,')) {
      throw new Error('Invalid screenshot');
    }

    const templatePath = path.resolve(
      __dirname,
      '../view/emails/SendMailFeedback.hbs'
    );

    let variables = {
      type,
      comment,
      screenshot,
      isScreenshot: true,
    };

    if (screenshot === '' || !screenshot || screenshot === null) {
      variables = { ...variables, isScreenshot: false };
    }

    await this.feedbackRepository.create({ comment, type, screenshot });

    console.log(variables);
    await this.mailAdapter.sendMail({
      subject: `Novo feedback de ${type}`,
      to: 'Denis Medeiros <contato.denismedeiros@hotmail.com>',
      path: templatePath,
      variables,
    });
  }
}
