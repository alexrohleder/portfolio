type Props = {
  title: string;
  subTitle?: string;
  footerNote?: string;
  children: React.ReactNode;
};

function BaseSection({ title, subTitle, footerNote, children }: Props) {
  return (
    <section>
      <div className="mb-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        {subTitle && (
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            {subTitle}
          </h2>
        )}
      </div>
      {children}
      {footerNote && (
        <footer className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {footerNote}
        </footer>
      )}
    </section>
  );
}

export default BaseSection;
