import { WhatsappLogo } from 'phosphor-react';

export function PrimaryButton() {
  function handleClick() {
    console.log(
      'Que pena a Riders Brasil não existe, seria muito bom ter uma comunidade assim não é mesmo?'
    );
  }
  return (
    <button
      onClick={handleClick}
      className="flex flex-row px-8 py-4 items-center justify-center max-w-xs
    bg-brand-300 hover:bg-brand-500 rounded-full gap-4 transition-colors
    font-bold text-sm uppercase text-zinc-100"
    >
      <WhatsappLogo size={24} color="#FFF" />
      Entre na comunidade
    </button>
  );
}
