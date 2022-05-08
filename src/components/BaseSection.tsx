type Props = {
  title: string;
  subTitle?: string;
  footerNote?: string;
  children: React.ReactNode;
};

function BaseSection({ title, subTitle, footerNote, children }: Props) {
  return (
    <section>
      <div className="mb-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        {subTitle && (
          <h2 className="text-gray-500 dark:text-gray-400 text-sm">
            {subTitle}
          </h2>
        )}
      </div>
      {children}
      {footerNote && (
        <footer className="text-gray-500 dark:text-gray-400 text-xs mt-4">
          {footerNote}
        </footer>
      )}
    </section>
  );
}

export default BaseSection;
