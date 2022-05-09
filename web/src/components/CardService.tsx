import { CheckCircle } from 'phosphor-react';
interface CardServiceProps {
  title: string;
  description: string;
}

export function CardService({ title, description }: CardServiceProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg px-auto p-6 border border-zinc-200 dark:border-zinc-700">
      <CheckCircle size={24} className="text-brand-300" />

      <h3 className="my-4 font-bold text-2xl">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  );
}
