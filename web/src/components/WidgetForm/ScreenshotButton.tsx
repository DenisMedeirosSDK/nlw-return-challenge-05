import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  onScreenShotTook: (screenshot: string | null) => void;
  screenshot: string | null;
  isSendingFeedback: boolean;
}

export function ScreenshotButton({
  onScreenShotTook,
  screenshot,
  isSendingFeedback,
}: ScreenshotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenShot(true);

    const canvas = await html2canvas(document.querySelector('html')!, {
      scale: 0.5,
      width: window.innerWidth,
      height: window.innerHeight,
      scrollY: -window.scrollY,
    });
    const base64Image = canvas.toDataURL('image/jpeg');

    onScreenShotTook(base64Image);
    setIsTakingScreenShot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        disabled={isSendingFeedback}
        onClick={() => onScreenShotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      disabled={isSendingFeedback}
      className="
      text-zinc-800 dark:text-zinc-100 
      bg-zinc-100 dark:bg-zinc-800 
      dark:hover:bg-zinc-700 hover:bg-white
      dark:focus:ring-offset-zinc-900 focus:ring-offset-zinc-900 
      focus:ring-brand-500
      rounded-md border-transparent p-2 
      transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
      "
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  );
}
