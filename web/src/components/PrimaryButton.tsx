import { WhatsappLogo } from 'phosphor-react';

export function PrimaryButton() {
  return (
    <button
      className="flex flex-row px-8 py-4 items-center justify-center max-w-xs
    bg-brand-300 hover:bg-brand-500 rounded-full gap-4 transition-colors
    font-bold text-sm uppercase text-zinc-100"
    >
      <WhatsappLogo size={24} color="#FFF" />
      Agende sua consulta
    </button>
  );
}
