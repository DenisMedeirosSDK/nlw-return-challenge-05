interface CardServiceProps {
  title: string;
  description: string;
}

export function CardService({ title, description }: CardServiceProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg px-auto p-6 border border-zinc-200 dark:border-zinc-700">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
        <path
          d="M17.091 8.18182L10.091 15.1818L6.90918 12"
          stroke="#8257e6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h3 className="my-4 font-bold text-2xl">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  );
}
