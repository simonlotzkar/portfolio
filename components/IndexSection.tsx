import React, { ReactNode } from "react";

interface IndexSectionProps {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Displays given title, followed by vertically stacked optional children.
 * Applies given id and optional className to the section.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - The id to apply to the section.
 * @param {string} props.title - The title to display at the top of the section.
 * @param {ReactNode} props.children - Optional children to render below the title.
 * @param {ReactNode} props.className - Optional className to apply to the section.
 * @returns {JSX.Element} The rendered IndexSection component.
 *
 * @author SimonLotzkar
 */
const IndexSection: React.FC<IndexSectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={className}>
      {/* Text: Title */}
      <h1 className="text-4xl font-semibold py-5 text-center text-secondary">{title}</h1>
      {/* Section: Children */}
      {children && <div className="mx-auto space-y-10 flex flex-col items-center">
        {children}
      </div>}
    </section>
  );
};

export default IndexSection;
