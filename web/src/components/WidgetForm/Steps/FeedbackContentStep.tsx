import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { api } from '../../../lib/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../../Loading';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackTtype: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackTtype,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const feedbackTypeInfo = feedbackTypes[feedbackTtype];
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackTtype,
      comment,
      screenshot,
    });
    setIsSendingFeedback(false);
    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute dark:text-zinc-400 dark:hover:text-zinc-100 text-zinc-500 hover:text-zinc-800"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
          {feedbackTypeInfo.title}
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm dark:placeholder-zinc-400 placeholder-zinc-500 dark:text-zinc-100 text-zinc-800 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que est?? acontecendo.."
          onChange={e => setComment(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenShotTook={setScreenshot}
            isSendingFeedback={isSendingFeedback}
          />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 text-white bg-brand-300 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
